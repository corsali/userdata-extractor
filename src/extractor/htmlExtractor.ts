import * as zip from "@zip.js/zip.js";

import { FileExtractor } from "./fileExtractor.js";

export class HtmlExtractor extends FileExtractor {
  htmlDocument: Document;

  async loadFileContents(zipEntry: zip.ZipEntry) {
    await super.loadFileContents(zipEntry);
    const parser = new DOMParser();
    this.htmlDocument = parser.parseFromString(this.fileContents, "text/html");
  }

  /**
   * Used mainly for testing to directly set the json document
   * @param htmlDocument
   */
  public async setHtmlDocument(htmlDocument: Document) {
    this.htmlDocument = htmlDocument;
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("HtmlMapper.process() not implemented");
  }
}
