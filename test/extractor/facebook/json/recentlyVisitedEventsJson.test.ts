import { recentlyVisitedEventsJson } from "../../../../src/extractor/facebook/json/recentlyVisitedEventsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Visited Events (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/recently_visited.json"
    );

    recentlyVisitedEventsJson.setJsonDocument(data);
    recentlyVisitedEventsJson.process();

    const { rows } = recentlyVisitedEventsJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].event_name).toEqual(new TextTableValue("Ultimate Frisbee"));
    expect(rows[0].event_url).toEqual(
      new UrlTableValue("https://www.facebook.com/events/6044238672271028/")
    );
    expect(rows[0].date_visited).toEqual(new DateTableValue(1661858262));
  });
});
