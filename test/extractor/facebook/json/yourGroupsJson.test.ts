import { yourGroupsJson } from "../../../../src/extractor/facebook/json/yourGroupsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Groups (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/groups/your_groups.json"
    );

    yourGroupsJson.setJsonDocument(data);
    yourGroupsJson.process();

    const { rows } = yourGroupsJson.table;

    const expectedValues = [
      {
        name: "G's Gems",
        timestamp: 1255440111,
      },
      {
        name: 'Geauga Lake "THE DECONSTRUCTION"',
        timestamp: 1248280172,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].group_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].date).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
