import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PostComments extends InstagramBaseModel {
  comment?: TextTableValue;

  date_commented?: DateTableValue;

  deleted_comment?: BoolTableValue;

  media_owner?: TextTableValue;

  constructor(
    comment: string,
    dateCommented: string,
    deletedComment: string,
    mediaOwner: string
  ) {
    super();
    this.comment = new TextTableValue(comment);
    this.date_commented = new DateTableValue(dateCommented);
    this.deleted_comment = new BoolTableValue(deletedComment);
    this.media_owner = new TextTableValue(mediaOwner);
  }
}
