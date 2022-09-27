import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Comments extends FacebookBaseModel {
  comment_title?: TextTableValue;

  comment_text?: TextTableValue;

  date_commented?: DateTableValue;

  attachments?: JsonTableValue;

  constructor(
    commentTitle: string,
    commentText: string,
    dateCommented: number,
    attachments?: object | string
  ) {
    super();
    this.comment_title = new TextTableValue(commentTitle);
    this.comment_text = new TextTableValue(commentText);
    this.date_commented = new DateTableValue(dateCommented);
    this.attachments = new JsonTableValue(attachments);
  }
}
