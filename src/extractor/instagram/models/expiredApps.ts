import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class ExpiredApps extends InstagramBaseModel {
  app_name?: TextTableValue;

  expired_on?: DateTableValue;

  user_id?: TextTableValue;

  constructor(appName: string, expiredOn: number, userId: string) {
    super();
    this.app_name = new TextTableValue(appName);
    this.expired_on = new DateTableValue(expiredOn);
    this.user_id = new TextTableValue(userId);
  }
}
