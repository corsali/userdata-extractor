/* eslint-disable no-restricted-syntax */
import { EmailIntegrationConfig } from "../config/emailIntegrations.js";
import { logger } from "./logger.js";
import { ZipFile } from "./zipFile.js";

/**
 * A module is considered valid if the zip contains any of the
 * files listed in its module config
 * @param zipPath
 * @param emailIntegrationConfig
 * @returns true if zip is valid, false otherwise
 */
const validateEmailIntegrationFolders = (
  zipFile: ZipFile,
  emailIntegrationConfig: EmailIntegrationConfig
): boolean => {
  logger.info(`Validating zip with config for ${emailIntegrationConfig.name}`);
  let validFileCount = 0;

  for (const zipEntry of zipFile.fileIterator()) {
    let found = false;
    for (const optionalFile of emailIntegrationConfig.files) {
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

export { validateEmailIntegrationFolders };
