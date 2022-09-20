import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecordDetails extends FacebookBaseModel {
  event_name?: TextTableValue;

  date_session_created?: DateTableValue;

  session_ip_address?: TextTableValue;

  session_user_agent?: TextTableValue;

  session_cookie?: TextTableValue;

  constructor(values: {
    eventName: string;
    dateSessionCreated: number;
    sessionIpAddress: string;
    sessionUserAgent: string;
    sessionCookie: string;
  }) {
    super();
    this.event_name = new TextTableValue(values.eventName);
    this.date_session_created = new DateTableValue(values.dateSessionCreated);
    this.session_ip_address = new TextTableValue(values.sessionIpAddress);
    this.session_user_agent = new TextTableValue(values.sessionUserAgent);
    this.session_cookie = new TextTableValue(values.sessionCookie);
  }
}
