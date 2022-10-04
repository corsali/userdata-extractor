import { pagesYouHaveUnfollowedJson } from "../../../../src/extractor/facebook/json/pagesYouHaveUnfollowedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Pages You've unfollowed (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/pages/pages_you've_unfollowed.json"
    );

    pagesYouHaveUnfollowedJson.setJsonDocument(data);
    pagesYouHaveUnfollowedJson.process();

    const { rows } = pagesYouHaveUnfollowedJson.table;

    const firstExpectedValues = [
      {
        timestamp: 1536082339,
        title: "Pittie Nation",
      },
      {
        timestamp: 1538418551,
        title: "Herb",
      },
      {
        timestamp: 1538870746,
        title: "Realistic Humor",
      },
    ];

    expect(rows.length).toEqual(7);
    firstExpectedValues.forEach((expectedValue, index) => {
      expect(rows[index].page_name).toEqual(
        new TextTableValue(expectedValue.title)
      );
      expect(rows[index].date_unfollowed).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
