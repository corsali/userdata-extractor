import config from "../../../config";
import { Table } from "../../../models/table";
import { JsonExtractor } from "../../jsonExtractor";
import { AdsInterests } from "../models/adsInterestsJson";

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
  "information_about_you/ad_interests.json",
  "ad_interests"
);
