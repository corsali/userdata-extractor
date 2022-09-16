import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Notifications extends FacebookBaseModel {
  date_notified?: DateTableValue;

  unread?: BoolTableValue;

  notification_url?: UrlTableValue;

  content?: TextTableValue;

  constructor(values: {
    dateNotified: number;
    unread: boolean;
    notificationUrl: string;
    content: string;
  }) {
    super();
    this.date_notified = new DateTableValue(values.dateNotified);
    this.unread = new BoolTableValue(values.unread);
    this.notification_url = new UrlTableValue(values.notificationUrl);
    this.content = new TextTableValue(values.content);
  }
}
