import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class GroupYourPendingPosts extends FacebookBaseModel {
  post_text?: TextTableValue;

  date_posted?: DateTableValue;

  constructor(postText: string, datePosted: number) {
    super();
    this.post_text = new TextTableValue(postText);
    this.date_posted = new DateTableValue(datePosted);
  }
}
