import { feedsJson } from "../../../../src/extractor/facebook/json/feedJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Feed (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson("/json/facebook/feed/feed.json");

    feedsJson.setJsonDocument(data);
    feedsJson.process();

    const { rows } = feedsJson.table;

    const expectedValues = [
      {
        category_name: "Favorites",
        description:
          "Friends and Pages whose posts you've prioritized in your Feed",
        timestamp: 1556594859,
        name: "St Peters Condominium Association",
        uri: "https://www.facebook.com/StPetersCondo/",
      },
      {
        category_name: "See Less",
        description:
          "Profiles and Pages you've recently chosen to see less of in your Feed",
        timestamp: 1513033547,
        name: "The MasterMinds",
        uri: "https://www.facebook.com/The-MasterMinds-693087927535095/",
      },
      {
        category_name: "See Less",
        description:
          "Profiles and Pages you've recently chosen to see less of in your Feed",
        timestamp: 1512993268,
        name: "Sarcastic & Shameless",
        uri: "https://www.facebook.com/sarcasticnshameless/",
      },
    ];

    expect(rows.length).toEqual(39);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].category).toEqual(
        new TextTableValue(expectedValue.category_name)
      );
      expect(rows[index].category_description).toEqual(
        new TextTableValue(expectedValue.description)
      );
      expect(rows[index].action_date).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
      expect(rows[index].feed_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].feed_url).toEqual(
        new UrlTableValue(expectedValue.uri)
      );
    });
  });
});
