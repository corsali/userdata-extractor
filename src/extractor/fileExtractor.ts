import * as zip from "@zip.js/zip.js";

import { Database } from "../database/database.js";
import { Table } from "../models/table/table.js";
import { logger } from "../utils/index.js";

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
    if (!FileExtractor.registeredExtractors[serviceName.toLowerCase()]) {
      FileExtractor.registeredExtractors[serviceName.toLowerCase()] = [];
    }
    FileExtractor.registeredExtractors[serviceName.toLowerCase()].push({
      filePattern,
      extractor: this,
    });

    // Instantiate the table belonging to this file extractor
    this.table = new Table(tableName);
  }

  /**
   * Find matching extractors given a file path
   * @param serviceName User data service name
   * @param filePath Path of a single file in a user data zip file
   * @returns
   */
  static getExtractor(serviceName: string, filePath: string): FileExtractor[] {
    if (FileExtractor.registeredExtractors[serviceName?.toLowerCase()]) {
      const fileExtractorEntries = FileExtractor.registeredExtractors[
        serviceName?.toLowerCase()
      ].filter((extractorEntry: FileExtractorEntry) => {
        const regex = new RegExp(extractorEntry.filePattern, "gi");
        return regex.test(filePath);
      });
      return fileExtractorEntries.map((fe) => fe.extractor);
    }

    logger.error(`No file extractors found for service ${serviceName}`);
    return [];
  }

  /**
   * Reads a zipEntry as text and sets fileContents
   * @param zipEntry
   */
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

  createTable(database: Database) {
    if (this.table) {
      database.createTable(this.serviceName, this.table);
    }
  }

  /**
   * Used mainly for testing. When multiple files for the same service are
   * processed needs to dump the extractors data between different files.
   * @param serviceName
   */
  static dumpExtractorData(serviceName: string) {
    if (!FileExtractor.registeredExtractors[serviceName]) {
      throw new Error(`Extractors for service ${serviceName} do not exist`);
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const extractorEntry of FileExtractor.registeredExtractors[
      serviceName
    ]) {
      extractorEntry.extractor.table.rows = [];
    }
  }
}
