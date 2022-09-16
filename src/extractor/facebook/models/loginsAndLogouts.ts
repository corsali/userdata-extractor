import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class LoginsAndLogouts extends FacebookBaseModel {
  action?: TextTableValue;

  date_activity_occurred?: DateTableValue;

  ip_address?: TextTableValue;

  site_name?: TextTableValue;

  constructor(values: {
    action: string;
    dateActivityOccurred: number;
    ipAddress: string;
    siteName: string;
  }) {
    super();
    this.action = new TextTableValue(values.action);
    this.date_activity_occurred = new DateTableValue(
      values.dateActivityOccurred
    );
    this.ip_address = new TextTableValue(values.ipAddress);
    this.site_name = new TextTableValue(values.siteName);
  }
}
