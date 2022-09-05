import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Monetization } from "../models/monetization.js";

class MonetizationJson extends JsonExtractor {
  async process() {
    const monetization = this.query(
      `$.monetization_eligibility[*].string_map_data`
    )[0];

    const processedMonetization = new Monetization({
      productName: monetization?.["product name"]?.value,
      decision: monetization?.decision?.value,
      reason: monetization?.reason?.value,
    });

    this.table.rows.push(processedMonetization);
  }
}

export const monetizationJson = new MonetizationJson(
  config.SERVICE_INSTAGRAM,
  ".*/monetization/eligibility.json",
  "monetization"
);
