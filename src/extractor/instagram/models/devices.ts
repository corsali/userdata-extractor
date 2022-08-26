import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class Devices extends InstagramBaseModel {
  deviceId?: TextTableValue;

  lastLogin?: DateTableValue;

  userAgent?: TextTableValue;

  constructor(valueMap: {
    deviceId: string;
    lastLogin: number;
    userAgent: string;
  }) {
    super();
    this.deviceId = new TextTableValue(valueMap.deviceId);
    this.lastLogin = new DateTableValue(valueMap.lastLogin);
    this.userAgent = new TextTableValue(valueMap.userAgent);
  }
}
