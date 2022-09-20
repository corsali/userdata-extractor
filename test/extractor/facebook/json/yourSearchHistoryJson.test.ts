import { yourSearchHistoryJson } from "../../../../src/extractor/facebook/json/yourSearchHistoryJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Saved Items (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/search/your_search_history.json"
    );

    yourSearchHistoryJson.setJsonDocument(data);
    yourSearchHistoryJson.process();

    const { rows } = yourSearchHistoryJson.table;

    const expectedValues: [number, string][] = [
      [1660675516, "Stephen Greg"],
      [1661015130, "martin guard"],
      [1661325834, "instagram"],
      [1661325837, "Instagram"],
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].date_searched).toEqual(
        new DateTableValue(expectedValue[0])
      );
      expect(rows[index].search_text).toEqual(
        new TextTableValue(expectedValue[1])
      );
    });
  });
});
