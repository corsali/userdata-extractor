/* eslint-disable no-restricted-syntax */
import { Database } from "../database/database.js";
import { SQLiteDatabase } from "../database/sqliteDatabase.js";
import { FileExtractor } from "../extractor/fileExtractor.js";
import * as Extractors from "../extractor/index.js";
import { loadZipFile, logger } from "../utils/index.js";

Extractors.register();

export type ServiceFile = {
  serviceName: string;
  file: File;
};

/**
 * Loads a zip file, extracts content to memory and exports it as an SQLite database
 * @param serviceName
 * @param file
 * @returns
 */
const zipToSQLiteInstance = async (
  serviceFiles: ServiceFile[],
  useWebWorkers = true
): Promise<Database> => {
  const database = new SQLiteDatabase();
  await database.initialize();

  for (const serviceFile of serviceFiles) {
    const unprocessedFiles = [];
    const zipFile = await loadZipFile(serviceFile.file, useWebWorkers);
    for (const zipEntry of zipFile.fileIterator()) {
      // Get a list of matching extractors
      const extractors: FileExtractor[] = FileExtractor.getExtractor(
        serviceFile.serviceName,
        zipEntry.data.filename
      );
      if (extractors?.length > 0) {
        for (const extractor of extractors) {
          // For each extractor, process the file and create the corresponding table
          await extractor.loadFileContents(zipEntry);
          await extractor.process();
          extractor.createTable(database);
        }
      } else {
        unprocessedFiles.push(zipEntry.data.filename);
      }
    }

    if (unprocessedFiles.length > 0) {
      logger.warn(
        `No extractor found for the following files:`,
        unprocessedFiles
      );
    }
  }

  return database;
};

export { zipToSQLiteInstance };
