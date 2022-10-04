import * as zip from "@zip.js/zip.js";
import jp from "jsonpath";

import { caseInsensitiveWrapper } from "../utils/index.js";
import { FileExtractor } from "./fileExtractor.js";

export class JsonExtractor extends FileExtractor {
  jsonDocument: object;

  async loadFileContents(zipEntry: zip.ZipEntry) {
    await super.loadFileContents(zipEntry);
    const parsedJson = JSON.parse(this.fileContents);
    this.jsonDocument = caseInsensitiveWrapper(parsedJson);
  }

  /**
   * Used mainly for testing to directly set the json document
   * @param file
   */
  public async setJsonDocument(json: object) {
    this.jsonDocument = caseInsensitiveWrapper(json);
  }

  query(jsonPath: string, document = this.jsonDocument) {
    return jp.query(document, jsonPath) ?? [];
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("JsonExtractor.process() not implemented");
  }
}
