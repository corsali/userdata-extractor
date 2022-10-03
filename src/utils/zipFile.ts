/* eslint-disable no-restricted-syntax */
import * as zip from "@zip.js/zip.js";

import config from "../config/index.js";
import { logger } from "./index.js";

// TODO: may need to make this blacklist service specific in the future
const IGNORE_FILEPATHS = [/__MACOSX\/\.*/, /\.DS_Store/, /.*\/messages\/.*/]; // Ignore private messages for now

/**
 * Class used for managing Zip files.
 *
 * Once a zip file is imported, it is turned into a file system,
 * so easy file operations can be performed on the individual
 * files inside the zip.
 */
export class ZipFile {
  fileSystem: zip.FS;

  file: File;

  constructor(file: File) {
    this.file = file;
    this.fileSystem = new zip.fs.FS();
  }

  /**
   * @returns Root of the file system
   */
  getRoot(): zip.ZipDirectoryEntry {
    return this.fileSystem.root;
  }

  /**
   * Remove a file from the file system
   * @param entry file or directory to remove
   */
  remove(entry: zip.ZipEntry): void {
    this.fileSystem.remove(entry);
  }

  /**
   * Return the mimetype of a zip entry
   * @param entry ZipFileEntry
   */
  // eslint-disable-next-line class-methods-use-this
  getMimeType(entry: zip.ZipFileEntry<string, string>): string {
    return zip.getMimeType(entry.name);
  }

  /**
   * Export current file system as a zip file
   * @param options zip.fs options object
   * @returns a zip file
   */
  async exportAsFile(
    options: zip.ZipDirectoryEntryExportOptions
  ): Promise<File> {
    const blob = await this.getRoot().exportBlob(options);
    return new File([blob], this.file.name);
  }

  /**
   * Create a file system from a zip file
   * @param options zip.fs options object
   */
  async importFileSystem(
    options: zip.ZipReaderConstructorOptions
  ): Promise<void> {
    await this.getRoot().importBlob(this.file, options);
  }

  /**
   * Remove any unwanted files from file system
   */
  sanitizeFiles(): void {
    const entriesToRemove = [];
    for (const zipEntry of this.fileIterator()) {
      const mimeType = this.getMimeType(zipEntry);
      if (
        zipEntry instanceof zip.fs.ZipFileEntry &&
        !config.whitelistedFileMimeTypes.includes(mimeType)
      ) {
        logger.info(`Removing ${zipEntry.data.filename}`);
        entriesToRemove.push(zipEntry);
      }
    }
    entriesToRemove.map((entry) => this.remove(entry));
  }

  /**
   * Returns an iterator that can be used to loop through all files
   */
  fileIterator() {
    function* helper(zipEntry: zip.ZipEntry): any {
      if (zipEntry instanceof zip.fs.ZipDirectoryEntry) {
        for (const zipEntryChild of zipEntry.children) {
          yield* helper(zipEntryChild);
        }
      } else if (
        zipEntry instanceof zip.fs.ZipFileEntry && // It's a file (not a folder)
        !IGNORE_FILEPATHS.some((regex) => regex.test(zipEntry.data.filename)) // Filepath is not blacklisted
      ) {
        yield zipEntry;
      }
    }

    return helper(this.getRoot());
  }

  /**
   * Creates a zip (File object) of all input files
   * @param files
   * @param options
   */
  static async createZipFromFiles(
    files: File[],
    zipFileName = "data.zip",
    options?: zip.ZipWriterAddDataOptions
  ): Promise<File> {
    const zipWriter = new zip.ZipWriter(new zip.BlobWriter("application/zip"), {
      bufferedWrite: true,
    });
    await Promise.all(
      files.map(async (file) => {
        await zipWriter.add(file.name, new zip.BlobReader(file), options);
      })
    );
    const zipBlob = await zipWriter.close();
    return new File([zipBlob], zipFileName);
  }
}
