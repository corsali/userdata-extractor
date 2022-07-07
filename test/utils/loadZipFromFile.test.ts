import * as zip from "@zip.js/zip.js";

import { loadZipFromFile } from "../../src/utils/loadZipFromFile.js";
import { loadTestFile } from "../helper.js";

describe("utils/loadZipFromFile", () => {
  beforeAll(() => {
    zip.configure({
      useWebWorkers: false,
    });
  });

  it("loadZipFromFile() returns a ZipFile", async () => {
    const file = loadTestFile("instagram_1.zip");
    const zipFile = await loadZipFromFile(file);
    expect(zipFile.getRoot().children?.length).toBeGreaterThan(0);
  });
});
