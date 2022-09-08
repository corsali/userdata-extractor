import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { CameraInformation } from "../models/cameraInformation.js";

class CameraInformationJson extends JsonExtractor {
  async process() {
    const cameraInformation = this.query(`$.devices_camera[*].string_map_data`);

    const processedCameraInformation = cameraInformation.map(
      (device) =>
        new CameraInformation({
          deviceId: device["device id"]?.value,
          supportedSdkVersions: device["supported sdk versions"]?.value,
          compression: device.compression?.value,
          faceTrackerVersion: device["face tracker version"]?.value,
        })
    );

    this.table.rows.push(...processedCameraInformation);
  }
}

export const cameraInformationJson = new CameraInformationJson(
  config.SERVICE_INSTAGRAM,
  ".*/camera_information.json",
  "camera_information"
);
