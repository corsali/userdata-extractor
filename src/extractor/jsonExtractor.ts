import * as zip from "@zip.js/zip.js";
import jp from "jsonpath";

import { recursivelyLowercaseObjectKeys } from "../utils/recursivelyLowercaseObjectKeys.js";
import { FileExtractor } from "./fileExtractor.js";

export class JsonExtractor extends FileExtractor {
  jsonDocument: object;

  async loadFileContents(zipEntry: zip.ZipEntry) {
    await super.loadFileContents(zipEntry);
    const parsedJson = JSON.parse(this.fileContents);
    this.jsonDocument = recursivelyLowercaseObjectKeys(parsedJson);
  }

  /**
   * Used mainly for testing to directly set the json document
   * @param file
   */
  public async setJsonDocument(json: object) {
    this.jsonDocument = recursivelyLowercaseObjectKeys(json);
  }

  query(jsonPath: string) {
    return jp.query(this.jsonDocument, jsonPath) ?? [];
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("JsonExtractor.process() not implemented");
  }
}
