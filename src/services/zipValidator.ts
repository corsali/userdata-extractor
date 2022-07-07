import config from "../config/index.js";
import { getModuleConfig } from "../utils/getModuleConfig.js";
import { validateZipContent } from "../utils/validateZipContent.js";
import { ZipFile } from "../utils/zipFile.js";

/**
 * Checks if a file is a valid module
 * @param zipFile Zip file to validate
 * @param moduleConfig A module config defined in src/config/modules
 * @returns isValid, validationReason
 */
const validateZipAgainstModule = async (
  zipFile: ZipFile,
  moduleName: string
) => {
  const moduleConfig = getModuleConfig(moduleName);

  let isValid = true;
  let validationReason = `Successfully validated zip file as ${moduleConfig.name}`;

  if (zipFile.file.size < config.minFileSizeInBytes) {
    isValid = false;
    validationReason = `File is not a valid size (< ${config.minFileSizeInBytes} bytes)`;
  }

  if (isValid) {
    const mimetype = zipFile.file.type;
    const validZipContents = validateZipContent(zipFile, moduleConfig);
    switch (mimetype) {
      case "application/zip":
        if (!validZipContents) {
          isValid = false;
          validationReason = `Invalid zip content for ${moduleConfig.name} data`;
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

export { validateZipAgainstModule };
