import { recentlyVisitedPagesJson } from "../../../../src/extractor/facebook/json/recentlyVisitedPagesJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Visited Pages (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/recently_visited.json"
    );

    recentlyVisitedPagesJson.setJsonDocument(data);
    recentlyVisitedPagesJson.process();

    const { rows } = recentlyVisitedPagesJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].page_name).toEqual(new TextTableValue("Instagram"));
    expect(rows[0].page_url).toEqual(
      new UrlTableValue("https://www.facebook.com/instagram/")
    );
    expect(rows[0].date_visited).toEqual(new DateTableValue(1661325838));
  });
});
