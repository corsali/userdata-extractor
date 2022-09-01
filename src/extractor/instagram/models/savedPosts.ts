import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class SavedPosts extends InstagramBaseModel {
  shared_url?: UrlTableValue;

  shared_username?: TextTableValue;

  shared_date?: DateTableValue;

  constructor(values: {
    sharedUrl?: string;
    sharedUsername?: string;
    sharedDate?: number;
  }) {
    super();
    this.shared_url = new UrlTableValue(values.sharedUrl);
    this.shared_username = new TextTableValue(values.sharedUsername);
    this.shared_date = new DateTableValue(values.sharedDate);
  }
}
