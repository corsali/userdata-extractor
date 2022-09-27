import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LocationHistory } from "../models/locationHistory.js";

class LocationHistoryJson extends JsonExtractor {
  async process() {
    const locationHistory = this.query(`$.location_history_v2.*`);

    const processedLocationHistory = locationHistory.map(
      (location) =>
        new LocationHistory(
          location.name,
          location.coordinate?.latitude,
          location.coordinate?.longitude,
          location.creation_timestamp
        )
    );

    this.table.rows.push(...processedLocationHistory);
  }
}

export const locationHistoryJson = new LocationHistoryJson(
  config.SERVICE_FACEBOOK,
  ".*/location_history.json",
  "location_history"
);
