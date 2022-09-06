import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PrimaryPublicLocation } from "../models/primaryPublicLocation.js";

class PrimaryPublicLocationJson extends JsonExtractor {
  async process() {
    const primaryLocation = this.query(`$.primary_public_location_v2`)[0];

    const processedPrimaryLocation = new PrimaryPublicLocation(
      primaryLocation.city,
      primaryLocation.region,
      primaryLocation.country
    );

    this.table.rows.push(processedPrimaryLocation);
  }
}

export const primaryPublicLocationJson = new PrimaryPublicLocationJson(
  config.SERVICE_FACEBOOK,
  ".*/primary_public_location.json",
  "primary_public_location"
);
