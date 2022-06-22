import * as zip from "@zip.js/zip.js";

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
  getMimeType(entry: zip.ZipFileEntry): string {
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

  fileIterator() {
    function* helper(zipEntry: zip.ZipEntry): any {
      if (zipEntry instanceof zip.fs.ZipDirectoryEntry) {
        // eslint-disable-next-line no-restricted-syntax
        for (const zipEntryChild of zipEntry.children) {
          yield* helper(zipEntryChild);
        }
      } else if (zipEntry instanceof zip.fs.ZipFileEntry) {
        yield zipEntry;
      }
    }

    return helper(this.getRoot());
  }
}
