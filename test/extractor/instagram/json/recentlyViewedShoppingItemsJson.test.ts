import { recentlyViewedShoppingItemsJson } from "../../../../src/extractor/instagram/json/recentlyViewedShoppingItemsJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Viewed Shopping Items (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/shopping/recently_viewed_items.json"
    );

    recentlyViewedShoppingItemsJson.setJsonDocument(data);
    recentlyViewedShoppingItemsJson.process();

    const { rows } = recentlyViewedShoppingItemsJson.table;

    expect(rows.length).toEqual(9);

    expect(rows[0].product_id).toEqual(new TextTableValue("5148824581831738"));
    expect(rows[0].product_name).toEqual(
      new TextTableValue("Vintage Sangria Velour Terry Cloth Stripe Pullover")
    );
    expect(rows[0].merchant_id).toEqual(new TextTableValue("4403848242"));
    expect(rows[0].merchant_name).toEqual(
      new TextTableValue("futurebluesvintage")
    );
    expect(rows[4].product_id).toEqual(new TextTableValue("5624971320864881"));
    expect(rows[4].product_name).toEqual(
      new TextTableValue("Geoffrey Beene Floral Skirt Set")
    );
    expect(rows[4].merchant_id).toEqual(new TextTableValue("28997166"));
    expect(rows[4].merchant_name).toEqual(new TextTableValue("mercyvintage"));
  });
});
