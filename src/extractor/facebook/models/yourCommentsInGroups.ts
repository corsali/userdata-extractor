import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourCommentsInGroups extends FacebookBaseModel {
  group_name?: TextTableValue;

  date_commented?: TextTableValue;

  comment?: TextTableValue;

  comment_title?: TextTableValue;

  constructor(values: {
    groupName: string;
    dateCommented: number;
    comment: string;
    commentTitle: string;
  }) {
    super();
    this.group_name = new TextTableValue(values.groupName);
    this.date_commented = new DateTableValue(values.dateCommented);
    this.comment = new TextTableValue(values.comment);
    this.comment_title = new TextTableValue(values.commentTitle);
  }
}
