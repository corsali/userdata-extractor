import { timeSpentJson } from "../../../../src/extractor/facebook/json/timeSpentJson";
import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Time Spent (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_news/time_spent.json"
    );

    timeSpentJson.setJsonDocument(data);
    timeSpentJson.process();

    const { rows } = timeSpentJson.table;

    const expectedValues = [
      {
        index: 0,
        timestamp: 1647930269,
        event_type: "outbound_click",
        post_id: 0,
        media_id: 5015149798528732,
        url: "https://wegotthiscovered.com/movies/a-monotonous-crime-thriller-that-spent-years-on-the-shelf-turns-the-tables-on-netflix/",
      },
      {
        index: 3,
        timestamp: 1647935375,
        event_type: "view_duration",
        post_id: 0,
        media_id: 4914562711992378,
        url: "https://thetakeout.com/cherry-flavor-in-candy-food-tastes-better-thanks-to-sc-1848680305",
        web_view_duration: 91,
      },
    ];

    expect(rows.length).toEqual(6);
    expectedValues.forEach((expectedValue) => {
      expect(rows[expectedValue.index].event_date).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
      expect(rows[expectedValue.index].event_type).toEqual(
        new TextTableValue(expectedValue.event_type)
      );
      expect(rows[expectedValue.index].post_id).toEqual(
        new IntegerTableValue(expectedValue.post_id)
      );
      expect(rows[expectedValue.index].media_id).toEqual(
        new IntegerTableValue(expectedValue.media_id)
      );
      expect(rows[expectedValue.index].event_url).toEqual(
        new UrlTableValue(expectedValue.url)
      );
      expect(rows[expectedValue.index].web_view_duration).toEqual(
        new IntegerTableValue(expectedValue.web_view_duration ?? "")
      );
    });
  });
});
