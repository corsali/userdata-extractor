import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AccountActivity extends FacebookBaseModel {
  action?: TextTableValue;

  date_activity_occurred?: DateTableValue;

  ip_address?: TextTableValue;

  user_agent?: TextTableValue;

  cookie?: TextTableValue;

  city?: TextTableValue;

  region?: TextTableValue;

  country?: TextTableValue;

  site_name?: TextTableValue;

  constructor(values: {
    action: string;
    dateActivityOccurred: number;
    ipAddress: string;
    userAgent: string;
    cookie: string;
    city: string;
    region: string;
    country: string;
    siteName: string;
  }) {
    super();
    this.action = new TextTableValue(values.action);
    this.date_activity_occurred = new DateTableValue(
      values.dateActivityOccurred
    );
    this.ip_address = new TextTableValue(values.ipAddress);
    this.user_agent = new TextTableValue(values.userAgent);
    this.cookie = new TextTableValue(values.cookie);
    this.city = new TextTableValue(values.city);
    this.region = new TextTableValue(values.region);
    this.country = new TextTableValue(values.country);
    this.site_name = new TextTableValue(values.siteName);
  }
}
