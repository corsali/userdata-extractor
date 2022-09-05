import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class LikedPosts extends InstagramBaseModel {
  post_url?: UrlTableValue;

  action?: TextTableValue;

  date_liked?: DateTableValue;

  constructor(values: { postUrl: string; action: string; dateLiked: number }) {
    super();
    this.post_url = new UrlTableValue(values.postUrl);
    this.action = new TextTableValue(values.action);
    this.date_liked = new DateTableValue(values.dateLiked);
  }
}
