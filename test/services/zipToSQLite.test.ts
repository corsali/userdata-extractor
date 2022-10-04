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

  it("zipToSQLiteInstance() exports an sqlite file", async () => {
    const testFiles = {
      instagram: [
        "instagram_html_1",
        "instagram_json_1",
        "instagram_json_2",
        "instagram_json_3",
        "instagram_json_4",
      ],
      facebook: [
        "facebook_json_1",
        "facebook_json_2",
        "facebook_json_3",
        "facebook_json_4",
      ],
      youtube: ["youtube_1", "youtube_2", "youtube_3", "youtube_4"],
    };

    /**
     * Loads a zip file, structures it and ensures the generated .sqlite file exists
     * @param serviceName (ie: instagram)
     * @param testFile (ie: instagram_json_1)
     */
    const runTestAgainstFile = async (
      serviceName: string,
      testFile: string
    ): Promise<void> => {
      deleteFile(`zip/${serviceName}/${testFile}.sqlite`);
      const file = await loadTestFile(`zip/${serviceName}/${testFile}.zip`);
      const database = await zipToSQLiteInstance(
        [{ serviceName, file }],
        false
      );
      saveSqliteDump(
        database.exportDatabase(serviceName),
        `zip/${serviceName}/${testFile}.sqlite`
      );
      database.close();
      expect(fileExists(`zip/${serviceName}/${testFile}.sqlite`)).toBeTruthy();
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

  it("zipToSQLiteInstance() can query with multiple services", async () => {
    const fbFile = await loadTestFile(`zip/facebook/facebook_json_1.zip`);
    const igFile = await loadTestFile(`zip/instagram/instagram_json_1.zip`);
    const database = await zipToSQLiteInstance(
      [
        { serviceName: "facebook", file: fbFile },
        { serviceName: "instagram", file: igFile },
      ],
      false
    );
    const results = database.runQuery([
      "select * from facebook.off_facebook_activity limit 5;",
      "select * from instagram.followers limit 5;",
    ]);
    database.close();

    expect(results?.length).toEqual(2);
    expect(results[0].queryResult?.length).toBeGreaterThan(1);
    expect(results[1].queryResult?.length).toBeGreaterThan(1);
  });
});
