import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class TimeSpent extends FacebookBaseModel {
  event_date?: DateTableValue;

  event_type?: TextTableValue;

  post_id?: IntegerTableValue;

  media_id?: IntegerTableValue;

  event_url?: UrlTableValue;

  web_view_duration?: IntegerTableValue;

  constructor(values: {
    eventDate: number;
    eventType: string;
    postId: number;
    mediaId: number;
    eventUrl: string;
    webViewDuration: number;
  }) {
    super();
    this.event_date = new DateTableValue(values.eventDate);
    this.event_type = new TextTableValue(values.eventType);
    this.post_id = new IntegerTableValue(values.postId);
    this.media_id = new IntegerTableValue(values.mediaId);
    this.event_url = new UrlTableValue(values.eventUrl);
    this.web_view_duration = new IntegerTableValue(values.webViewDuration);
  }
}
