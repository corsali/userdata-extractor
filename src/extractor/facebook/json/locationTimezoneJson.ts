import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LocationTimezone } from "../models/locationTimezone.js";

class LocationTimezoneJson extends JsonExtractor {
  async process() {
    const locationTimezone = this.query(`$.timezone_v2`)[0];

    const processedLocationTimezone = new LocationTimezone(locationTimezone);

    this.table.rows.push(processedLocationTimezone);
  }
}

export const locationTimezoneJson = new LocationTimezoneJson(
  config.SERVICE_FACEBOOK,
  "location/timezone.json",
  "location_timezone"
);
