import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyViewedAds } from "../models/recentlyViewedAds.js";

class RecentlyViewedAdsJson extends JsonExtractor {
  async process() {
    const viewedAds = this.query(
      `$.recently_viewed[?(@.name=='Ads')].entries.*`
    );

    const processedViewedAds = viewedAds.map(
      (ad) => new RecentlyViewedAds(ad.data?.name, ad.data?.uri, ad.timestamp)
    );

    this.table.rows.push(...processedViewedAds);
  }
}

export const recentlyViewedAdsJson = new RecentlyViewedAdsJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_viewed.json",
  "recently_viewed_ads"
);
