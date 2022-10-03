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
    deleteFile(
      `csv/${config.SERVICE_NETFLIX_VIEWING_HISTORY}/${config.SERVICE_NETFLIX_VIEWING_HISTORY}.sqlite`
    );
    const file = await loadTestFile(
      `csv/${config.SERVICE_NETFLIX_VIEWING_HISTORY}/NetflixViewingHistory.csv`
    );
    const serviceFile = await filesToZip(
      config.SERVICE_NETFLIX_VIEWING_HISTORY,
      [file]
    );
    const database = await zipToSQLiteInstance([serviceFile], false);

    saveSqliteDump(
      database.exportDatabase(config.SERVICE_NETFLIX_VIEWING_HISTORY),
      `csv/${config.SERVICE_NETFLIX_VIEWING_HISTORY}/${config.SERVICE_NETFLIX_VIEWING_HISTORY}.sqlite`
    );
    database.close();
    expect(
      fileExists(
        `csv/${config.SERVICE_NETFLIX_VIEWING_HISTORY}/${config.SERVICE_NETFLIX_VIEWING_HISTORY}.sqlite`
      )
    ).toBeTruthy();
  });
});
