import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PrimaryLocation } from "../models/primaryLocation.js";

class PrimaryLocationJson extends JsonExtractor {
  async process() {
    const primaryLocation = this.query(`$.primary_location_v2`)[0];

    const processedPrimaryLocation = new PrimaryLocation(
      primaryLocation.city_region_pairs?.[0]?.[0],
      primaryLocation.city_region_pairs?.[0]?.[1],
      primaryLocation.zipcode?.[0]
    );

    this.table.rows.push(processedPrimaryLocation);
  }
}

export const primaryLocationJson = new PrimaryLocationJson(
  config.SERVICE_FACEBOOK,
  ".*/primary_location.json",
  "primary_location"
);
