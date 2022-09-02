import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdsViewed } from "../models/adsViewed.js";

class AdsViewedJson extends JsonExtractor {
  async process() {
    const adsViewed = this.query(
      `$.impressions_history_ads_seen[*].string_map_data`
    );

    const processedAdsViewed = adsViewed.map(
      (adViewed) =>
        new AdsViewed(adViewed.author.value, adViewed.time.timestamp)
    );

    this.table.rows.push(...processedAdsViewed);
  }
}

export const adsViewedJson = new AdsViewedJson(
  config.SERVICE_INSTAGRAM,
  ".*/ads_viewed.json",
  "ads_viewed"
);
