import { ServiceFile } from "../services/zipToSQLite.js";
import { ZipFile } from "./index.js";

/**
 * Compress multiple files into a single Zip file
 * @param serviceName
 * @param files
 * @returns
 */
const filesToZip = async (
  serviceName: string,
  files: File[],
  useWebWorkers = true
): Promise<ServiceFile> => {
  const file: File = await ZipFile.createZipFromFiles(
    files,
    `${files[0].name}.zip`,
    {
      useWebWorkers,
    }
  );
  return {
    serviceName,
    file,
  };
};

export { filesToZip };
