import { pagesYouHaveLikedJson } from "../../../../src/extractor/facebook/json/pagesYouHaveLikedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Pages You Have Liked (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/pages_and_profiles/pages_you've_liked.json"
    );

    pagesYouHaveLikedJson.setJsonDocument(data);
    pagesYouHaveLikedJson.process();

    const { rows } = pagesYouHaveLikedJson.table;

    const expectedValues: [string, number][] = [
      ["BIG Events", 1598870322],
      ["LifeTv", 1577828621],
    ];

    expect(rows.length).toEqual(expectedValues.length);

    for (let i = 0; i < expectedValues.length; i++) {
      expect(rows[i].page_name).toEqual(
        new TextTableValue(expectedValues[i][0])
      );
      expect(rows[i].date_liked).toEqual(
        new DateTableValue(expectedValues[i][1])
      );
    }
  });
});
