import { pagesYouFollowJson } from "../../../../src/extractor/facebook/json/pagesYouFollowJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Pages You Follow (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/pages/pages_you_follow.json"
    );

    pagesYouFollowJson.setJsonDocument(data);
    pagesYouFollowJson.process();

    const { rows } = pagesYouFollowJson.table;

    const firstExpectedValues = [
      {
        timestamp: 1300287542,
        title: "City of Wentzville MO \u00e2\u0080\u0093 Government",
      },
      {
        timestamp: 1340113846,
        title: "Wentzville Missouri Police Department",
      },
      {
        timestamp: 1361493287,
        title: "Jeff Lewis",
      },
    ];

    expect(rows.length).toEqual(22);
    firstExpectedValues.forEach((expectedValue, index) => {
      expect(rows[index].page_name).toEqual(
        new TextTableValue(expectedValue.title)
      );
      expect(rows[index].date_followed).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
