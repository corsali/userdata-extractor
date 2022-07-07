import * as zip from "@zip.js/zip.js";

import { exportZipToSql } from "../../src/services/zipExporter.js";
import {
  deleteFile,
  fileExists,
  loadTestFile,
  saveSqliteDump,
} from "../helper";

describe("services/zipExporter", () => {
  beforeAll(() => {
    zip.configure({
      useWebWorkers: false,
    });
  });

  it("exportZipToSql() saves an sqlite file", async () => {
    deleteFile("instagram_1.sqlite");
    const file = loadTestFile("instagram_1.zip");
    const data = await exportZipToSql("instagram", file);
    saveSqliteDump(data, "instagram_1.sqlite");
    expect(fileExists("instagram_1.sqlite")).toBeTruthy();
  });
});
