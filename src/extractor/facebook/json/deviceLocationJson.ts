import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { DeviceLocation } from "../models/deviceLocation.js";

class DeviceLocationJson extends JsonExtractor {
  async process() {
    const phoneNumberLocation = this.query(`$.phone_number_location_v2.*`);

    const processedPhoneNumberLocation = phoneNumberLocation.map(
      (location) => new DeviceLocation(location.spn, location.country_code)
    );

    this.table.rows.push(...processedPhoneNumberLocation);
  }
}

export const deviceLocationJson = new DeviceLocationJson(
  config.SERVICE_FACEBOOK,
  ".*/device_location.json",
  "device_location"
);
