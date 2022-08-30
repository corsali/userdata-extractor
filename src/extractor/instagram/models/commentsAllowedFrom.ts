import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class CommentsAllowedFrom extends InstagramBaseModel {
  comments_allowed_from?: TextTableValue;

  constructor(commentsAllowedFrom?: string) {
    super();
    this.comments_allowed_from = new TextTableValue(commentsAllowedFrom);
  }
}
