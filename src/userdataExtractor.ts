import { FileExtractor } from "./extractor/fileExtractor.js";
import * as Mappers from "./extractor/index.js";
import { QueryService } from "./query/queryService.js";
import { ZipFile } from "./utils/zipFile.js";

Mappers.register();

export namespace UserdataExtractor {
  export async function zipToSql(
    serviceName: string,
    file: File
  ): Promise<Uint8Array> {
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
  }

  export async function loadZip(file: File): Promise<ZipFile> {
    const zipFile = new ZipFile(file);
    await zipFile.importFileSystem({ filenameEncoding: "utf-8" });
    return zipFile;
  }
}
