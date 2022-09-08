import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class SavedPosts extends InstagramBaseModel {
  post_url?: UrlTableValue;

  post_username?: TextTableValue;

  date_saved?: DateTableValue;

  constructor(values: {
    postUrl?: string;
    postUsername?: string;
    dateSaved?: number;
  }) {
    super();
    this.post_url = new UrlTableValue(values.postUrl);
    this.post_username = new TextTableValue(values.postUsername);
    this.date_saved = new DateTableValue(values.dateSaved);
  }
}
