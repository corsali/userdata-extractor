import { ZipFile } from "./zipFile.js";

const loadZipFromFile = async (file: File): Promise<ZipFile> => {
  const zipFile = new ZipFile(file);
  await zipFile.importFileSystem({ filenameEncoding: "utf-8" });
  return zipFile;
};

export { loadZipFromFile };
