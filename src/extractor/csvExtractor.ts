import * as zip from "@zip.js/zip.js";
import * as csvParser from "papaparse";

import { caseInsensitiveWrapper, logger } from "../utils/index.js";
import { FileExtractor } from "./fileExtractor.js";

export class CsvExtractor extends FileExtractor {
  csvDocument: object[];

  async loadFileContents(zipEntry: zip.ZipEntry) {
    await super.loadFileContents(zipEntry);
  }

  public async parseText(
    text: string,
    options?: Partial<csvParser.ParseWorkerConfig>
  ) {
    return new Promise<object[]>((resolve) => {
      const csvConfig: csvParser.ParseWorkerConfig = {
        // Default CSV parsing options
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: (results: csvParser.ParseResult<any>) => {
          if (results.errors?.length > 0) {
            logger.warn(
              `Error parsing ${this.zipEntry?.data?.filename}`,
              results.errors
            );
            resolve([]);
          }
          resolve(caseInsensitiveWrapper(results.data) as []);
        },

        // Override default options if needed
        ...options,
      };

      csvParser.parse(text, csvConfig);
    });
  }

  public async parse(options?: Partial<csvParser.ParseWorkerConfig>) {
    this.csvDocument = await this.parseText(this.fileContents, options);
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("CsvExtractor.process() not implemented");
  }
}
