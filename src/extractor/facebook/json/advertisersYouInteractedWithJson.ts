import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdvertisersYouInteractedWith as Advertisers } from "../models/advertisersYouInteractedWith.js";

class AdvertisersYouInteractedWithJson extends JsonExtractor {
  async process() {
    const advertisersInteractedWith = this.query(`$.history_v2.*`);

    const processedAdvertisersInteractedWith = advertisersInteractedWith.map(
      (advertiser) =>
        new Advertisers(
          advertiser.title,
          advertiser.action,
          advertiser.timestamp
        )
    );

    this.table.rows.push(...processedAdvertisersInteractedWith);
  }
}

export const advertisersYouInteractedWithJson =
  new AdvertisersYouInteractedWithJson(
    config.SERVICE_FACEBOOK,
    ".*/advertisers_you've_interacted_with.json",
    "advertisers_you_interacted_with"
  );
