import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Devices } from "../models/devices.js";

class DevicesJson extends JsonExtractor {
  async process() {
    const devices = this.query(`$.devices_devices[*].string_map_data`);

    const processedDevices = devices.map(
      (device) =>
        new Devices({
          deviceId: device["Device ID"].value,
          lastLogin: device["Last Login"].timestamp,
          userAgent: device["User Agent"].value,
        })
    );

    this.table.rows.push(...processedDevices);
  }
}

export const devicesJson = new DevicesJson(
  config.SERVICE_INSTAGRAM,
  ".*/devices.json",
  "devices"
);
