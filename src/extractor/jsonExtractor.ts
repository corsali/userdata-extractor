import * as zip from "@zip.js/zip.js";
import jp from "jsonpath";

import { FileExtractor } from "./fileExtractor.js";

export class JsonExtractor extends FileExtractor {
  jsonDocument: object;

  async loadFileContents(zipEntry: zip.ZipEntry) {
    await super.loadFileContents(zipEntry);
    this.jsonDocument = JSON.parse(this.fileContents);
  }

  /**
   * Used mainly for testing to directly set the json document
   * @param file
   */
  public async setJsonDocument(json: object) {
    this.jsonDocument = json;
  }

  query(jsonPath: string) {
    return jp.query(this.jsonDocument, jsonPath) ?? [];
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("JsonExtractor.process() not implemented");
  }
}
