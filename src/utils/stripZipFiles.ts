import { loadZipFromFile } from "./loadZipFromFile.js";
import { logger } from "./logger.js";

/**
 * Extract zip contents in memory, and strip out any file types that are not allowed
 * @returns An array of sanitized files
 */
const stripZipFiles = async (files: Array<File>): Promise<Array<File>> => {
  const sanitizedFiles: Array<File> = [];
  for (let i = 0; i < files.length; i++) {
    logger.info(`Stripping unsupported files for ${files[i].name}`);
    const zipFile = await loadZipFromFile(files[i]);
    zipFile.sanitizeFiles();
    const strippedFile = await zipFile.exportAsFile({ bufferedWrite: true });
    sanitizedFiles.push(strippedFile);
  }
  return sanitizedFiles;
};

export { stripZipFiles };
