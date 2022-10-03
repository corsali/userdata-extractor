import * as zip from "@zip.js/zip.js";
import { parse as parseCsv, ParseResult, ParseWorkerConfig } from "papaparse";

import { caseInsensitiveWrapper, logger } from "../utils/index.js";
import { FileExtractor } from "./fileExtractor.js";

export class CsvExtractor extends FileExtractor {
  csvDocument: object[];

  async loadFileContents(zipEntry: zip.ZipEntry) {
    await super.loadFileContents(zipEntry);
  }

  public async parse(options?: ParseWorkerConfig): Promise<void> {
    return new Promise((resolve) => {
      const csvConfig: ParseWorkerConfig = {
        // Default CSV parsing options
        header: true,
        worker: true,
        complete: (results: ParseResult<any>) => {
          if (results.errors?.length > 0) {
            logger.warn(
              `Error parsing ${this.zipEntry.data.filename}`,
              results.errors
            );
          }
          this.csvDocument = caseInsensitiveWrapper(results.data) as [];
          resolve();
        },

        // Override default options if needed
        ...options,
      };

      parseCsv(this.fileContents, csvConfig);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async process() {
    throw new Error("CsvExtractor.process() not implemented");
  }
}
