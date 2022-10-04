import { ZipFile } from "./index.js";

const loadZipFile = async (
  file: File,
  useWebWorkers = true
): Promise<ZipFile> => {
  const zipFile = new ZipFile(file);
  await zipFile.importFileSystem({ filenameEncoding: "utf-8", useWebWorkers });
  return zipFile;
};

export { loadZipFile };
