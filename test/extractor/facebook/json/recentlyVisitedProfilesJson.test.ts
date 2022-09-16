import { recentlyVisitedProfilesJson } from "../../../../src/extractor/facebook/json/recentlyVisitedProfilesJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Visited Profiles (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/recently_visited.json"
    );

    recentlyVisitedProfilesJson.setJsonDocument(data);
    recentlyVisitedProfilesJson.process();

    const { rows } = recentlyVisitedProfilesJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].profile_name).toEqual(new TextTableValue("Jack Langdon"));
    expect(rows[0].profile_url).toEqual(
      new UrlTableValue("https://www.facebook.com/jacklo")
    );
    expect(rows[0].date_visited).toEqual(new DateTableValue(1655402901));
    expect(rows[1].profile_name).toEqual(new TextTableValue("Mike Peter"));
    expect(rows[1].profile_url).toEqual(
      new UrlTableValue("https://www.facebook.com/petr.mike")
    );
    expect(rows[1].date_visited).toEqual(new DateTableValue(1653132157));
  });
});
