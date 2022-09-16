import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class IpAddressActivity extends FacebookBaseModel {
  action?: TextTableValue;

  date_activity_occurred?: DateTableValue;

  ip_address?: TextTableValue;

  user_agent?: TextTableValue;

  constructor(values: {
    action: string;
    dateActivityOccurred: number;
    ipAddress: string;
    userAgent: string;
  }) {
    super();
    this.action = new TextTableValue(values.action);
    this.date_activity_occurred = new DateTableValue(
      values.dateActivityOccurred
    );
    this.ip_address = new TextTableValue(values.ipAddress);
    this.user_agent = new TextTableValue(values.userAgent);
  }
}
