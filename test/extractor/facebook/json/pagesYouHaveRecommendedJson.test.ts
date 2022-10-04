import { pagesYouHaveRecommendedJson } from "../../../../src/extractor/facebook/json/pagesYouHaveRecommendedJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Pages You've recommended (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/pages/pages_you've_recommended.json"
    );

    pagesYouHaveRecommendedJson.setJsonDocument(data);
    pagesYouHaveRecommendedJson.process();

    const { rows } = pagesYouHaveRecommendedJson.table;

    const firstExpectedValues = [
      {
        name: "Walmart Kent",
        timestamp: 1448059495,
        url: "https://www.facebook.com/Walmart3722/",
      },
      {
        name: "CHC Addiction Services",
        timestamp: 1448059472,
        url: "https://www.facebook.com/CHCAkron/",
      },
      {
        name: "Bethany Evangelical Lutheran Church",
        timestamp: 1419476551,
        url: "https://www.facebook.com/Bethany-Evangelical-Lutheran-Church-116202225068015/",
      },
    ];

    expect(rows.length).toEqual(10);
    firstExpectedValues.forEach((expectedValue, index) => {
      expect(rows[index].page_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].date_recommended).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
      expect(rows[index].page_url).toEqual(
        new UrlTableValue(expectedValue.url)
      );
    });
  });
});
