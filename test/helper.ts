import * as fs from "fs";
import { readFile } from "fs/promises"; // Use newer fs api
import * as path from "path";

/**
 * Loads a file from the /test/data directory
 * @param fileName
 * @returns
 */
const loadTestFile = async (fileName: string): Promise<File> => {
  const data = await readFile(getFilePath(fileName));
  return new File([data], fileName);
};

/**
 * Loads a test file into a json object
 * @param fileName Name of the file from the /test/data/. directory
 * @returns
 */
const loadTestFileAsJson = async (fileName: string): Promise<object> => {
  const file = await readFile(getFilePath(fileName), "utf8");
  return JSON.parse(file);
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
    console.error(e);
  }
};

const fileExists = (fileName: string): boolean => {
  return fs.existsSync(getFilePath(fileName));
};

const getFilePath = (fileName: string) =>
  path.join(__dirname, "./data", fileName);

export {
  deleteFile,
  fileExists,
  loadTestFile,
  loadTestFileAsJson,
  saveSqliteDump,
};
