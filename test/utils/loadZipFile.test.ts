import * as zip from "@zip.js/zip.js";

import { loadZipFile } from "../../src/utils/loadZipFile.js";
import { loadTestFile } from "../helper.js";

describe("utils/loadZipFromFile", () => {
  beforeAll(() => {
    zip.configure({
      useWebWorkers: false,
    });
  });

  it("loadZipFromFile() returns a ZipFile", async () => {
    const file = await loadTestFile("zip/instagram/instagram_html_1.zip");
    const zipFile = await loadZipFile(file);
    expect(zipFile.getRoot().children?.length).toBeGreaterThan(0);
  });
});
