import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourPosts extends FacebookBaseModel {
  date_posted?: DateTableValue;

  post_text?: TextTableValue;

  attachments?: JsonTableValue;

  constructor(
    title: string,
    datePosted: number,
    postText: string,
    attachments: object
  ) {
    super();
    this.title = new TextTableValue(title);
    this.date_posted = new DateTableValue(datePosted);
    this.post_text = new TextTableValue(postText);
    this.attachments = new JsonTableValue(attachments);
  }
}
