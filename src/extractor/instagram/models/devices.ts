import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class Devices extends InstagramBaseModel {
  device_id?: TextTableValue;

  last_login?: DateTableValue;

  user_agent?: TextTableValue;

  constructor(values: {
    deviceId: string;
    lastLogin: number;
    userAgent: string;
  }) {
    super();
    this.device_id = new TextTableValue(values.deviceId);
    this.last_login = new DateTableValue(values.lastLogin);
    this.user_agent = new TextTableValue(values.userAgent);
  }
}
