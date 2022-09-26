import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdsInterests } from "../models/adsInterests.js";

class AdsInterestsJson extends JsonExtractor {
  async process() {
    const adsInterests = this.query(`$.topics_v2.*`);

    const processedAdsInterests = adsInterests.map(
      (adsInterest) => new AdsInterests(adsInterest)
    );

    this.table.rows.push(...processedAdsInterests);
  }
}

export const adsInterestsJson = new AdsInterestsJson(
  config.SERVICE_FACEBOOK,
  ".*/ads_interests.json",
  "ads_interests"
);
