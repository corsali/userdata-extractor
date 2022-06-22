import * as fs from "fs";
import * as path from "path";

/**
 * Loads a file from the /test/data directory
 * @param fileName
 * @returns
 */
const loadTestFile = (fileName: string): File => {
  const data = fs.readFileSync(getFilePath(fileName));
  return new File([data], fileName);
};

const saveSqliteDump = (data: Uint8Array, outputFileName: string) => {
  const buffer = Buffer.from(data);
  fs.writeFileSync(getFilePath(outputFileName), buffer);
};

const deleteFile = (fileName: string) => {
  try {
    fs.unlinkSync(getFilePath(fileName));
  } catch (e) {
    console.warn(`Unable to delete file ${fileName}`);
  }
};

const fileExists = (fileName: string) => {
  return fs.existsSync(getFilePath(fileName));
};

const getFilePath = (fileName: string) =>
  path.join(__dirname, "./data", fileName);

export { deleteFile, fileExists, loadTestFile, saveSqliteDump };
