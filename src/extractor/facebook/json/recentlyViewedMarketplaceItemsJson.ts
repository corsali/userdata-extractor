import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyViewedMarketplaceItems } from "../models/recentlyViewedMarketplaceItems.js";

class RecentlyViewedMarketplaceItemsJson extends JsonExtractor {
  async process() {
    const marketplaceItems = this.query(
      `$.recently_viewed[?(@.name=='Marketplace Interactions')].children[?(@.name=='Marketplace Items')].entries.*`
    );

    const processedMarketplaceItems = marketplaceItems.map(
      (item) =>
        new RecentlyViewedMarketplaceItems(
          item.data?.name,
          item.data?.uri,
          item.timestamp
        )
    );

    this.table.rows.push(...processedMarketplaceItems);
  }
}

export const recentlyViewedMarketplaceItemsJson =
  new RecentlyViewedMarketplaceItemsJson(
    config.SERVICE_FACEBOOK,
    ".*/recently_viewed.json",
    "recently_viewed_marketplace_items"
  );
