import { recentlyViewedMarketplaceItemsJson } from "../../../../src/extractor/facebook/json/recentlyViewedMarketplaceItemsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Viewed Marketplace Items (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/your_interactions_on_facebook/recently_viewed.json"
    );

    recentlyViewedMarketplaceItemsJson.setJsonDocument(data);
    recentlyViewedMarketplaceItemsJson.process();

    const { rows } = recentlyViewedMarketplaceItemsJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].item_name).toEqual(
      new TextTableValue("Board Games for Sale")
    );
    expect(rows[0].item_uri).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/marketplace/item/648744662997943/"
      )
    );
    expect(rows[0].interaction_date).toEqual(new DateTableValue(1658579908));
    expect(rows[1].item_name).toEqual(
      new TextTableValue("OnePlus Dash Charger and Cable")
    );
    expect(rows[1].item_uri).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/marketplace/item/713455759837880/"
      )
    );
    expect(rows[1].interaction_date).toEqual(new DateTableValue(1658556539));
  });
});
