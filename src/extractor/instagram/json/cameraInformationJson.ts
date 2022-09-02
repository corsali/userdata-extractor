import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { CameraInformation } from "../models/cameraInformation.js";

class CameraInformationJson extends JsonExtractor {
  async process() {
    const cameraInformation = this.query(`$.devices_camera[*].string_map_data`);

    const processedCameraInformation = cameraInformation.flatMap((deviceInfo) =>
      deviceInfo["supported sdk versions"].value
        .split(",")
        .map(
          (supportedSdk: string) =>
            new CameraInformation(deviceInfo["device id"].value, supportedSdk)
        )
    );

    this.table.rows.push(...processedCameraInformation);
  }
}

export const cameraInformationJson = new CameraInformationJson(
  config.SERVICE_INSTAGRAM,
  ".*/camera_information.json",
  "camera_information"
);
