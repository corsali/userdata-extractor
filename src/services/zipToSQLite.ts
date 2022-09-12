/* eslint-disable no-restricted-syntax */
import { Database } from "../database/database.js";
import { SQLiteDatabase } from "../database/sqliteDatabase.js";
import { FileExtractor } from "../extractor/fileExtractor.js";
import * as Extractors from "../extractor/index.js";
import { loadZipFile } from "../utils/loadZipFile.js";
import { logger } from "../utils/logger.js";

Extractors.register();

/**
 * Loads a zip file, extracts content to memory and exports it as an SQLite database
 * @param serviceName
 * @param file
 * @returns
 */
const zipToSQLiteInstance = async (
  serviceName: string,
  file: File,
  useWebWorkers = true
): Promise<Database> => {
  const zipFile = await loadZipFile(file, useWebWorkers);
  const database = new SQLiteDatabase();
  await database.initialize();
  const unprocessedFiles = [];

  for (const zipEntry of zipFile.fileIterator()) {
    // Get a list of matching extractors
    const extractors: FileExtractor[] = FileExtractor.getExtractor(
      serviceName,
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

  if (unprocessedFiles) {
    logger.warn(
      `No extractor found for the following files:`,
      unprocessedFiles
    );
  }
  return database;
};

export { zipToSQLiteInstance };
