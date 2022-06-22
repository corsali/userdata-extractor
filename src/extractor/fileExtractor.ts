import * as zip from "@zip.js/zip.js";

import { QueryService } from "../query/queryService";
import { Table } from "../query/table";

interface FileExtractorEntry {
  filePattern: string;
  extractor: FileExtractor;
}
interface ServiceExtractor {
  [serviceName: string]: FileExtractorEntry[];
}

export class FileExtractor {
  private static registeredExtractors: ServiceExtractor = {};

  zipEntry: zip.ZipEntry;

  fileContents: string;

  mimeType: string;

  serviceName: string;

  table: Table;

  constructor(serviceName: string, filePattern: string) {
    this.serviceName = serviceName;
    if (!FileExtractor.registeredExtractors[serviceName]) {
      FileExtractor.registeredExtractors[serviceName] = [];
    }
    FileExtractor.registeredExtractors[serviceName].push({
      filePattern,
      extractor: this,
    });
  }

  static getExtractor(serviceName: string, filePath: string): FileExtractor {
    if (FileExtractor.registeredExtractors[serviceName]) {
      const fileExtractorEntry = FileExtractor.registeredExtractors[
        serviceName
      ].find((extractorEntry: FileExtractorEntry) => {
        const regex = new RegExp(extractorEntry.filePattern, "g");
        return regex.test(filePath);
      });
      return fileExtractorEntry?.extractor ?? null;
    }
    throw new Error(`No file extractors found for service ${serviceName}`);
  }

  async loadFileContents(zipEntry: zip.ZipEntry) {
    this.zipEntry = zipEntry;
    this.mimeType = zip.getMimeType(zipEntry.name);
    this.fileContents = await this.zipEntry.data.getData(
      new zip.TextWriter(this.mimeType)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("FileExtractor.process() not implemented");
  }

  createTable(queryService: QueryService) {
    if (this.table) {
      queryService.createTable(this.table);
    }
  }
}
