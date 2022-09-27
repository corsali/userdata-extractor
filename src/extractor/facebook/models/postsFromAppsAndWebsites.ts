import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PostsFromAppsAndWebsites extends FacebookBaseModel {
  date_posted?: DateTableValue;

  post_title?: TextTableValue;

  attachments?: JsonTableValue;

  constructor(datePosted: number, postTitle: string, attachments: object) {
    super();
    this.date_posted = new DateTableValue(datePosted);
    this.post_title = new TextTableValue(postTitle);
    this.attachments = new JsonTableValue(attachments);
  }
}
