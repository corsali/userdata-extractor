import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class CameraInformation extends InstagramBaseModel {
  device_id?: TextTableValue;

  supported_sdk_versions?: TextTableValue;

  compression?: TextTableValue;

  face_tracker_version?: TextTableValue;

  constructor(values: {
    deviceId: string;
    supportedSdkVersions: string;
    compression: string;
    faceTrackerVersion: string;
  }) {
    super();
    this.device_id = new TextTableValue(values.deviceId);
    this.supported_sdk_versions = new TextTableValue(
      values.supportedSdkVersions
    );
    this.compression = new TextTableValue(values.compression);
    this.face_tracker_version = new TextTableValue(values.faceTrackerVersion);
  }
}
