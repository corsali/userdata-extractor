import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PostsViewed extends InstagramBaseModel {
  post_author?: TextTableValue;

  date_viewed?: DateTableValue;

  constructor(postAuthor: string, dateViewed: string) {
    super();
    this.post_author = new TextTableValue(postAuthor);
    this.date_viewed = new DateTableValue(dateViewed);
  }
}
