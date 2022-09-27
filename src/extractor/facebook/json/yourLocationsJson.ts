import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourLocations } from "../models/yourLocations.js";

class YourLocationsJson extends JsonExtractor {
  async process() {
    const yourLocations = this.query(`$.news_your_locations_v2.*`);

    const processedLocations = yourLocations.map(
      (location) => new YourLocations(location)
    );

    this.table.rows.push(...processedLocations);
  }
}

export const yourLocationsJson = new YourLocationsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_locations.json",
  "your_locations"
);
