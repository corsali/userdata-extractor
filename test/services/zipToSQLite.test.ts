import * as zip from "@zip.js/zip.js";

import { zipToSQLiteInstance } from "../../src/services/zipToSQLite";
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

  it("zipToSQLiteInstance() saves an HTML export as sqlite file", async () => {
    deleteFile("instagram_html_1.sqlite");
    const file = await loadTestFile("instagram_html_1.zip");
    const database = await zipToSQLiteInstance("instagram", file, false);
    saveSqliteDump(database.exportDatabase(), "instagram_html_1.sqlite");
    expect(fileExists("instagram_html_1.sqlite")).toBeTruthy();
  });

  it("zipToSQLiteInstance() saves a JSON export as sqlite file", async () => {
    const testFiles = [
      "instagram_json_1",
      "instagram_json_2",
      "instagram_json_3",
    ];
    await Promise.allSettled(
      testFiles.map(async (testFile: string) => {
        deleteFile(`${testFile}.sqlite`);
        const file = await loadTestFile(`${testFile}.zip`);
        const database = await zipToSQLiteInstance("instagram", file, false);
        saveSqliteDump(database.exportDatabase(), `${testFile}.sqlite`);
        expect(fileExists(`${testFile}.sqlite`)).toBeTruthy();
      })
    );
  });

  afterAll(async () => {
    // Allows tests time to wrap up and avoid jest open handle error
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
  });
});
