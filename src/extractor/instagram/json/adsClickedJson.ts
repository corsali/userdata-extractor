import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdsClicked } from "../models/adsClicked.js";

class AdsClickedJson extends JsonExtractor {
  async process() {
    const adsClicked = this.query(`$.impressions_history_ads_clicked[*]`);

    const processedAdsClicked = adsClicked.flatMap((adClicked) =>
      adClicked.string_list_data.map(
        (adClickedSingle: { timestamp: string }) =>
          new AdsClicked(adClicked.title, adClickedSingle.timestamp)
      )
    );

    this.table.rows.push(...processedAdsClicked);
  }
}

export const adsClickedJson = new AdsClickedJson(
  config.SERVICE_INSTAGRAM,
  ".*/ads_clicked.json",
  "ads_clicked"
);
