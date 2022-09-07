import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyViewedShoppingItems } from "../models/recentlyViewedShoppingItems";

class RecentlyViewedShoppingItemsJson extends JsonExtractor {
  async process() {
    const recentlyViewedItems = this.query(
      `$.checkout_saved_recently_viewed_products[*].string_map_data`
    );

    const processedRecentlyViewedItem = recentlyViewedItems.map(
      (viewedItem) =>
        new RecentlyViewedShoppingItems({
          productId: viewedItem["product id"]?.value,
          productName: viewedItem["product name"]?.value,
          merchantId: viewedItem["merchant id"]?.value,
          merchantName: viewedItem["merchant name"]?.value,
        })
    );

    this.table.rows.push(...processedRecentlyViewedItem);
  }
}

export const recentlyViewedShoppingItemsJson =
  new RecentlyViewedShoppingItemsJson(
    config.SERVICE_INSTAGRAM,
    ".*/shopping/recently_viewed_items.json",
    "recently_viewed_products"
  );
