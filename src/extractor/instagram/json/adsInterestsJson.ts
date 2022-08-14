import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdsInterests } from "../models/adsInterestsJson.js";

class AdInterestsJson extends JsonExtractor {
  async process() {
    const interestData = this.query(
      `$.inferred_data_ig_interest.*.string_map_data.Interest.value`
    );

    const processedInterestData = interestData.map(
      (interest: string) => new AdsInterests(interest)
    );

    this.table.rows.push(...processedInterestData);
  }
}

export const adInterestsJson = new AdInterestsJson(
  config.SERVICE_INSTAGRAM,
  ".*/ads_interests.json",
  "ads_interests"
);
