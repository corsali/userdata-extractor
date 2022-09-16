import { recentMarketplaceVisitsJson } from "../../../../src/extractor/facebook/json/recentMarketplaceVisitsJson";
import { DateTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recent Marketplace Visits (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/recently_visited.json"
    );

    recentMarketplaceVisitsJson.setJsonDocument(data);
    recentMarketplaceVisitsJson.process();

    const { rows } = recentMarketplaceVisitsJson.table;

    expect(rows.length).toEqual(7);

    expect(rows[0].date_visited).toEqual(new DateTableValue("Jul 23, 2022"));
    expect(rows[1].date_visited).toEqual(new DateTableValue("Jul 22, 2022"));
    expect(rows[6].date_visited).toEqual(new DateTableValue("Sep 12, 2019"));
  });
});
