import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class CameraInformation extends InstagramBaseModel {
  device_id?: TextTableValue;

  supported_sdk_version?: TextTableValue;

  constructor(deviceId: string, supportedSdkVersion: string) {
    super();
    this.device_id = new TextTableValue(deviceId);
    this.supported_sdk_version = new TextTableValue(supportedSdkVersion);
  }
}
