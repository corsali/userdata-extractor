import * as Mappers from "./extractor";
import { FileExtractor } from "./extractor/fileExtractor";
import { QueryService } from "./query/queryService";
import { ZipFile } from "./utils/zipFile";

Mappers.register();

const zipToSql = async (
  serviceName: string,
  file: File
): Promise<Uint8Array> => {
  const zipFile = await loadZip(file);
  const queryService = new QueryService();
  await queryService.initialize();

  // eslint-disable-next-line no-restricted-syntax
  for (const zipEntry of zipFile.fileIterator()) {
    const mapper: FileExtractor = FileExtractor.getExtractor(
      serviceName,
      zipEntry.data.filename
    );
    if (mapper) {
      await mapper.loadFileContents(zipEntry);
      await mapper.process();
      mapper.createTable(queryService);
    }
  }

  return queryService.exportDatabase();
};

const loadZip = async (file: File): Promise<ZipFile> => {
  const zipFile = new ZipFile(file);
  await zipFile.importFileSystem({ filenameEncoding: "utf-8" });
  return zipFile;
};

export { loadZip, zipToSql };
