import * as zip from "@zip.js/zip.js";

import { Database } from "../database/database.js";
import { Table } from "../models/table/table.js";

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

  /**
   * Initializes and registers an individual file extractor
   * @param serviceName Name of email integration, ex: Instagram
   * @param filePattern File path pattern that this extractor can handle, ex: /messages/*./message_1.html
   * @param tableName The name of the table this extractor should build, ex: personal_messages
   */
  constructor(serviceName: string, filePattern: string, tableName: string) {
    this.serviceName = serviceName;

    // Register the extractor
    if (!FileExtractor.registeredExtractors[serviceName]) {
      FileExtractor.registeredExtractors[serviceName] = [];
    }
    FileExtractor.registeredExtractors[serviceName].push({
      filePattern,
      extractor: this,
    });

    // Instantiate the table belonging to this file extractor
    this.table = new Table(tableName);
  }

  /**
   * Find a matching extractor given a file path
   * @param serviceName User data service name
   * @param filePath Path of a single file in a user data zip file
   * @returns
   */
  static getExtractor(serviceName: string, filePath: string): FileExtractor {
    if (FileExtractor.registeredExtractors[serviceName?.toLowerCase()]) {
      const fileExtractorEntry = FileExtractor.registeredExtractors[
        serviceName?.toLowerCase()
      ].find((extractorEntry: FileExtractorEntry) => {
        const regex = new RegExp(extractorEntry.filePattern, "g");
        return regex.test(filePath);
      });
      return fileExtractorEntry?.extractor ?? null;
    }
    throw new Error(`No file extractors found for service ${serviceName}`);
  }

  /**
   * Reads a zipEntry as text and sets fileContents
   * @param zipEntry
   */
  async loadFileContents(zipEntry: zip.ZipEntry) {
    // TODO: Remove later
    zip.configure({
      useWebWorkers: false,
    });
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

  createTable(database: Database) {
    if (this.table) {
      database.createTable(this.table);
    }
  }
}
