import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class MyComments extends YoutubeBaseModel {
  comment_description?: TextTableValue;

  comment_link?: UrlTableValue;

  comment_date?: DateTableValue;

  commented_content_link?: UrlTableValue;

  comment_text?: TextTableValue;

  constructor(values: {
    commentDescription: string;
    commentLink: string;
    commentDate: number | Date;
    commentedContentLink: string;
    commentText: string;
  }) {
    super();
    this.comment_description = new TextTableValue(values.commentDescription);
    this.comment_link = new UrlTableValue(values.commentLink);
    this.comment_date = new DateTableValue(values.commentDate);
    this.commented_content_link = new UrlTableValue(
      values.commentedContentLink
    );
    this.comment_text = new TextTableValue(values.commentText);
  }
}
