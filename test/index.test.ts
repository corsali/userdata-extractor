import * as zip from "@zip.js/zip.js";

import { loadZip, zipToSql } from "../src/index";
import { deleteFile, fileExists, loadTestFile, saveSqliteDump } from "./helper";

describe("index", () => {
  beforeEach(() => {
    zip.configure({
      useWebWorkers: false,
    });
  });

  it("loadZip() returns a ZipFile", async () => {
    const file = loadTestFile("instagram_1.zip");
    const zipFile = await loadZip(file);
    expect(zipFile.getRoot().children?.length).toBeGreaterThan(0);
  });

  it("zipToSql() saves an sqlite file", async () => {
    deleteFile("instagram_1.sqlite");
    const file = loadTestFile("instagram_1.zip");
    const data = await zipToSql("instagram", file);
    saveSqliteDump(data, "instagram_1.sqlite");
    expect(fileExists("instagram_1.sqlite")).toBeTruthy();
  });
});
