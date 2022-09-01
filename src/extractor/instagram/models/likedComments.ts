import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class LikedComments extends InstagramBaseModel {
  title?: TextTableValue;

  comment_url?: UrlTableValue;

  action?: TextTableValue;

  date_liked?: DateTableValue;

  constructor(values: {
    title: string;
    commentUrl: string;
    action: string;
    dateLiked: number;
  }) {
    super();
    this.title = new TextTableValue(values.title);
    this.comment_url = new UrlTableValue(values.commentUrl);
    this.action = new TextTableValue(values.action);
    this.date_liked = new DateTableValue(values.dateLiked);
  }
}
