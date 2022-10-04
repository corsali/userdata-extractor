import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LastLocation } from "../models/lastLocation.js";

class LastLocationJson extends JsonExtractor {
  async process() {
    const location = this.query(`$.last_location_v2`)[0];

    this.table.rows.push(
      new LastLocation(
        location.coordinate?.latitude,
        location.coordinate?.longitude,
        location.time
      )
    );
  }
}

export const lastLocationJson = new LastLocationJson(
  config.SERVICE_FACEBOOK,
  ".*/last_location.json",
  "last_location"
);
