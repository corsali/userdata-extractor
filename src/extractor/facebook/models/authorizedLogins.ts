import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AuthorizedLogins extends FacebookBaseModel {
  action_name?: TextTableValue;

  date_created?: DateTableValue;

  date_updated?: DateTableValue;

  ip_address?: TextTableValue;

  user_agent?: TextTableValue;

  datr_cookie?: TextTableValue;

  constructor(values: {
    actionName: string;
    dateCreated: number;
    dateUpdated: number;
    ipAddress: string;
    userAgent: string;
    datrCookie: string;
  }) {
    super();
    this.action_name = new TextTableValue(values.actionName);
    this.date_created = new DateTableValue(values.dateCreated);
    this.date_updated = new DateTableValue(values.dateUpdated);
    this.ip_address = new TextTableValue(values.ipAddress);
    this.user_agent = new TextTableValue(values.userAgent);
    this.datr_cookie = new TextTableValue(values.datrCookie);
  }
}
