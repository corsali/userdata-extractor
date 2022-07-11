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

  it("exportZipToSql() saves an HTML export as sqlite file", async () => {
    deleteFile("instagram_html_1.sqlite");
    const file = loadTestFile("instagram_html_1.zip");
    const data = await exportZipToSql("instagram", file);
    saveSqliteDump(data, "instagram_html_1.sqlite");
    expect(fileExists("instagram_html_1.sqlite")).toBeTruthy();
  });

  it("exportZipToSql() saves a JSON export as sqlite file", async () => {
    deleteFile("instagram_json_1.sqlite");
    const file = loadTestFile("instagram_json_1.zip");
    const data = await exportZipToSql("instagram", file);
    saveSqliteDump(data, "instagram_json_1.sqlite");
    expect(fileExists("instagram_json_1.sqlite")).toBeTruthy();
  });
});
