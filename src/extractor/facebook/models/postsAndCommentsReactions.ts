import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PostsAndCommentsReactions extends FacebookBaseModel {
  post_title?: TextTableValue;

  post_reaction?: TextTableValue;

  date_posted?: DateTableValue;

  constructor(postTitle: string, postReaction: string, datePosted: number) {
    super();
    this.post_title = new TextTableValue(postTitle);
    this.post_reaction = new TextTableValue(postReaction);
    this.date_posted = new DateTableValue(datePosted);
  }
}
