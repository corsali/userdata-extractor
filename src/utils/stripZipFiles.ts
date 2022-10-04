import config from "../config/index.js";
import { loadZipFile, logger, ZipFile } from "./index.js";

/**
 * Extract zip contents in memory, and strip out any file types that are not allowed
 * @param files An array of files (may be .zip, or not)
 * @returns An array of sanitized files
 */
const stripZipFiles = async (files: Array<File>): Promise<Array<File>> => {
  const sanitizedFiles: Array<File> = [];
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i].name;
    logger.info(`Stripping unsupported files for ${fileName}`);

    let zipFile: ZipFile;
    if (!config.zipMimeTypes.includes(files[i].type)) {
      // Not a zip file (maybe a single csv, txt, etc file) -- zip it up
      const zipName = fileName.includes(".")
        ? `${fileName.split(".").slice(0, -1).join(".")}.zip` // test.csv => test.zip
        : `${fileName}.zip`;
      const zippedFile = await ZipFile.createZipFromFiles([files[i]], zipName);
      zipFile = await loadZipFile(zippedFile);
    } else {
      zipFile = await loadZipFile(files[i]);
    }
    zipFile.sanitizeFiles();
    const strippedFile = await zipFile.exportAsFile({ bufferedWrite: true });
    sanitizedFiles.push(strippedFile);
  }
  return sanitizedFiles;
};

export { stripZipFiles };
