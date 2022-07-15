import { DateTableValue, TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class PostsViewed extends InstagramBaseModel {
  post_author?: TextTableValue;

  date_viewed?: DateTableValue;

  constructor(postAuthor: string, dateViewed: string) {
    super();
    this.post_author = new TextTableValue(postAuthor);
    this.date_viewed = new DateTableValue(dateViewed);
  }
}
