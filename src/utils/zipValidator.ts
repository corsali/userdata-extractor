import config from "../config/index.js";
import {
  getEmailIntegrationConfig,
  validateEmailIntegrationFolders,
  ZipFile,
} from "./index.js";

/**
 * Checks if a file is a valid module
 * @param zipFile Zip file to validate
 * @param moduleConfig A module config defined in src/config/modules
 * @returns isValid, validationReason
 */
const validateEmailIntegrationZip = async (
  zipFile: ZipFile,
  emailIntegrationName: string
) => {
  const emailIntegrationConfig =
    getEmailIntegrationConfig(emailIntegrationName);

  let isValid = true;
  let validationReason = `Successfully validated zip file as ${emailIntegrationConfig.name}`;

  if (zipFile.file.size < config.minFileSizeInBytes) {
    isValid = false;
    validationReason = `File is not a valid size (< ${config.minFileSizeInBytes} bytes)`;
  }

  if (isValid) {
    const mimetype = zipFile.file.type;
    const validZipContents = validateEmailIntegrationFolders(
      zipFile,
      emailIntegrationConfig
    );
    switch (mimetype) {
      case "application/zip":
        if (!validZipContents) {
          isValid = false;
          validationReason = `Invalid zip content for ${emailIntegrationConfig.name} data`;
        }
        break;
      default:
        isValid = false;
        validationReason = `Unsupported file type ${mimetype}`;
    }
  }

  return {
    isValid,
    validationReason,
  };
};

export { validateEmailIntegrationZip };
