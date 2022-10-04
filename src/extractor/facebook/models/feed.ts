import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Feed extends FacebookBaseModel {
  category?: TextTableValue;

  category_description?: TextTableValue;

  action_date?: DateTableValue;

  feed_name?: TextTableValue;

  feed_url?: UrlTableValue;

  constructor(values: {
    category: string;
    categoryDescription: string;
    actionDate: number;
    feedName: string;
    feedUrl: string;
  }) {
    super();
    this.category = new TextTableValue(values.category);
    this.category_description = new TextTableValue(values.categoryDescription);
    this.action_date = new DateTableValue(values.actionDate);
    this.feed_name = new TextTableValue(values.feedName);
    this.feed_url = new UrlTableValue(values.feedUrl);
  }
}
