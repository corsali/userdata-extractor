import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class WhereYouAreLoggedIn extends FacebookBaseModel {
  date_session_created?: DateTableValue;

  date_session_updated?: DateTableValue;

  ip_address?: TextTableValue;

  user_agent?: TextTableValue;

  cookie?: TextTableValue;

  device?: TextTableValue;

  location?: TextTableValue;

  app_name?: TextTableValue;

  session_type?: TextTableValue;

  constructor(values: {
    dateSessionCreated: number;
    dateSessionUpdated: number;
    ipAddress: string;
    userAgent: string;
    cookie: string;
    device: string;
    location: string;
    appName: string;
    sessionType: string;
  }) {
    super();
    this.date_session_created = new DateTableValue(values.dateSessionCreated);
    this.date_session_updated = new DateTableValue(values.dateSessionUpdated);
    this.ip_address = new TextTableValue(values.ipAddress);
    this.user_agent = new TextTableValue(values.userAgent);
    this.cookie = new TextTableValue(values.cookie);
    this.device = new TextTableValue(values.device);
    this.location = new TextTableValue(values.location);
    this.app_name = new TextTableValue(values.appName);
    this.session_type = new TextTableValue(values.sessionType);
  }
}
