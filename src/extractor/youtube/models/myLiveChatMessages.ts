import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class MyLiveChatMessages extends YoutubeBaseModel {
  message_title?: TextTableValue;

  date_posted?: DateTableValue;

  content_url?: UrlTableValue;

  message_text?: TextTableValue;

  constructor(values: {
    messageTitle: string;
    datePosted: number | Date;
    contentUrl: string;
    messageText: string;
  }) {
    super();
    this.message_title = new TextTableValue(values.messageTitle);
    this.date_posted = new DateTableValue(values.datePosted);
    this.content_url = new UrlTableValue(values.contentUrl);
    this.message_text = new TextTableValue(values.messageText);
  }
}
