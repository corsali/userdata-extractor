/* eslint-disable no-restricted-syntax */
import { profileChangesJson } from "../../../../src/extractor/instagram/json/profileChangesJson";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Changes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/account_information/profile_changes.json"
    );

    profileChangesJson.setJsonDocument(data);
    profileChangesJson.process();

    const { rows } = profileChangesJson.table;

    let lastTimestamp = 0;
    for (const row of rows) {
      // Timestamps are in order
      expect(row.change_date.value).toBeGreaterThan(lastTimestamp);
      lastTimestamp = row.change_date.value;

      // Changed
      expect(row.previous_value).not.toEqual(row.new_value);
    }

    // TODO: Add more tests
  });
});
