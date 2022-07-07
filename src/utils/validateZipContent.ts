/* eslint-disable no-restricted-syntax */
import { ModuleConfig } from "../config/modules.js";
import { logger } from "./logger.js";
import { ZipFile } from "./zipFile.js";

/**
 * A module is considered valid if the zip contains any of the
 * files listed in its module config
 * @param zipPath
 * @param moduleConfig
 * @returns true if zip is valid, false otherwise
 */
const validateZipContent = (
  zipFile: ZipFile,
  moduleConfig: ModuleConfig
): boolean => {
  logger.info(`Validating zip with module config for ${moduleConfig.name}`);
  let validFileCount = 0;

  for (const zipEntry of zipFile.fileIterator()) {
    let found = false;
    for (const optionalFile of moduleConfig.files) {
      if (zipEntry.data.filename.startsWith(optionalFile)) {
        validFileCount += 1;
        found = true;
        logger.info(
          `Matched file: ${zipEntry.data.filename} against: ${optionalFile}`
        );
        // eslint-disable-next-line no-continue
        continue;
      }
    }
    if (!found) {
      logger.warn(`Found unknown file: ${zipEntry.data.filename}`);
    }
  }

  logger.info(`Number of valid files found in this zip: ${validFileCount}`);
  return validFileCount > 0;
};

export { validateZipContent };
