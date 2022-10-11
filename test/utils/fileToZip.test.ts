import * as zip from "@zip.js/zip.js";

import config from "../../src/config/index.js";
import { zipToSQLiteInstance } from "../../src/services/zipToSQLite.js";
import { filesToZip } from "../../src/utils/index.js";
import {
  deleteFile,
  fileExists,
  loadTestFile,
  saveSqliteDump,
} from "../helper.js";

describe("utils/fileToZip", () => {
  beforeAll(() => {
    zip.configure({
      useWebWorkers: false,
    });
  });

  it("fileToZip() returns a ServiceFile", async () => {
    const testFiles = {
      [config.SERVICE_NETFLIX_VIEWING_HISTORY]: ["NetflixViewingHistory"],
      [config.SERVICE_AMAZON_ORDERS]: [
        "01-Aug-2022_to_07-Oct-2022",
        // "01-Jan-2010_to_08-Oct-2010",
        "Amazon_Orders_csv",
      ],
    };

    /**
     * Loads a CSV file, structures it and ensures the generated .sqlite file exists
     * @param serviceName (ie: instagram)
     * @param testFile (ie: instagram_json_1)
     */
    const runTestAgainstFile = async (
      serviceName: string,
      testFile: string
    ): Promise<void> => {
      deleteFile(`csv/${serviceName}/${testFile}.sqlite`);
      const file = await loadTestFile(`csv/${serviceName}/${testFile}.csv`);
      const serviceFile = await filesToZip(serviceName, [file], false);
      const database = await zipToSQLiteInstance([serviceFile], false);
      saveSqliteDump(
        database.exportDatabase(serviceName),
        `csv/${serviceName}/${testFile}.sqlite`
      );
      database.close();
      expect(fileExists(`csv/${serviceName}/${testFile}.sqlite`)).toBeTruthy();
    };

    const testPromises: Promise<void>[] = [];
    Object.entries(testFiles).forEach((service: [string, string[]]) => {
      const serviceName = service[0];
      const testFilesForService = service[1];
      testFilesForService.forEach((testFile: string) => {
        testPromises.push(runTestAgainstFile(serviceName, testFile));
      });
    });

    await Promise.all(testPromises);
  });
});
