import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class LoginProtectionData extends FacebookBaseModel {
  activity_name?: TextTableValue;

  date_session_created?: DateTableValue;

  date_session_updated?: DateTableValue;

  ip_address?: TextTableValue;

  constructor(values: {
    activityName: string;
    dateSessionCreated: number;
    dateSessionUpdated: number;
    ipAddress: string;
  }) {
    super();
    this.activity_name = new TextTableValue(values.activityName);
    this.date_session_created = new DateTableValue(values.dateSessionCreated);
    this.date_session_updated = new DateTableValue(values.dateSessionUpdated);
    this.ip_address = new TextTableValue(values.ipAddress);
  }
}
