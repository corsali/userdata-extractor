import { SQLiteExporter } from "../exporter/sqliteExporter.js";
import { FileExtractor } from "../extractor/fileExtractor.js";
import * as Mappers from "../extractor/index.js";
import { loadZipFromFile } from "../utils/loadZipFromFile.js";

Mappers.register();

/**
 * Loads a zip file, extracts content to memory and exports it as an SQLite database
 * @param serviceName
 * @param file
 * @returns
 */
const exportZipToSql = async (
  serviceName: string,
  file: File
): Promise<Uint8Array> => {
  const zipFile = await loadZipFromFile(file);
  const exporter = new SQLiteExporter();
  await exporter.initialize();

  // eslint-disable-next-line no-restricted-syntax
  for (const zipEntry of zipFile.fileIterator()) {
    const mapper: FileExtractor = FileExtractor.getExtractor(
      serviceName,
      zipEntry.data.filename
    );
    if (mapper) {
      await mapper.loadFileContents(zipEntry);
      await mapper.process();
      mapper.createTable(exporter);
    }
  }

  return exporter.exportDatabase();
};

export { exportZipToSql };
