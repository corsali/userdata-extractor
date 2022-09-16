import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentMarketplaceVisits } from "../models/recentMarketplaceVisits.js";

class RecentMarketplaceVisitsJson extends JsonExtractor {
  async process() {
    const marketplaceVisits = this.query(
      `$.visited_things_v2[?(@.name=='Marketplace Visits')].entries.*.data.value`
    );

    const processedMarketplaceVisits = marketplaceVisits.map(
      (marketplaceVisit) => new RecentMarketplaceVisits(marketplaceVisit)
    );

    this.table.rows.push(...processedMarketplaceVisits);
  }
}

export const recentMarketplaceVisitsJson = new RecentMarketplaceVisitsJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_visited.json",
  "recent_marketplace_visits"
);
