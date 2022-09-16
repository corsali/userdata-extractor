import { recentlyVisitedGroupsJson } from "../../../../src/extractor/facebook/json/recentlyVisitedGroupsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Visited Groups (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/recently_visited.json"
    );

    recentlyVisitedGroupsJson.setJsonDocument(data);
    recentlyVisitedGroupsJson.process();

    const { rows } = recentlyVisitedGroupsJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].group_name).toEqual(new TextTableValue("Eastgate Cycles"));
    expect(rows[0].group_url).toEqual(
      new UrlTableValue("https://www.facebook.com/groups/EastgateCycles/")
    );
    expect(rows[0].date_visited).toEqual(new DateTableValue(1629822238));
    expect(rows[1].group_name).toEqual(
      new TextTableValue("Global Cycling Network Community")
    );
    expect(rows[1].group_url).toEqual(
      new UrlTableValue("https://www.facebook.com/groups/gcncommunity/")
    );
    expect(rows[1].date_visited).toEqual(new DateTableValue(1628320840));
  });
});
