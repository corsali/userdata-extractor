import { DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PostsViewed extends InstagramBaseModel {
  post_author?: TextItem;

  date_viewed?: DateItem;

  constructor(postAuthor: string, dateViewed: string) {
    super();
    this.post_author = new TextItem(postAuthor);
    this.date_viewed = new DateItem(dateViewed);
  }
}
