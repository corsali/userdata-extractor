import { SQLiteDatabase } from "../database/sqliteDatabase.js";
import { FileExtractor } from "../extractor/fileExtractor.js";
import * as Extractors from "../extractor/index.js";
import { loadZipFile } from "../utils/loadZipFile.js";

Extractors.register();

/**
 * Loads a zip file, extracts content to memory and exports it as an SQLite database
 * @param serviceName
 * @param file
 * @returns
 */
const zipToSQLiteInstance = async (
  serviceName: string,
  file: File
): Promise<Uint8Array> => {
  const zipFile = await loadZipFile(file);
  const database = new SQLiteDatabase();
  await database.initialize();

  // eslint-disable-next-line no-restricted-syntax
  for (const zipEntry of zipFile.fileIterator()) {
    const extractor: FileExtractor = FileExtractor.getExtractor(
      serviceName,
      zipEntry.data.filename
    );
    if (extractor) {
      await extractor.loadFileContents(zipEntry);
      await extractor.process();
      extractor.createTable(database);
    }
  }

  return database.exportDatabase();
};

export { zipToSQLiteInstance as exportZipToSql };
