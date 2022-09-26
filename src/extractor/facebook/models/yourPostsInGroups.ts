import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourPostsInGroups extends FacebookBaseModel {
  title?: TextTableValue;

  date_posted?: DateTableValue;

  attachments?: JsonTableValue;

  post?: TextTableValue;

  data?: JsonTableValue;

  tags?: TextTableValue;

  constructor(values: {
    title: string;
    datePosted: number;
    attachments: object;
    post: string;
    data: object;
    tags: string;
  }) {
    super();
    this.title = new TextTableValue(values.title);
    this.date_posted = new DateTableValue(values.datePosted);
    this.attachments = new JsonTableValue(values.attachments);
    this.post = new TextTableValue(values.post);
    this.data = new JsonTableValue(values.data);
    this.tags = new TextTableValue(values.tags);
  }
}
