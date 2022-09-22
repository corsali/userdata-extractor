import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Notes extends FacebookBaseModel {
  title?: TextTableValue;

  content?: TextTableValue;

  date_created?: DateTableValue;

  date_updated?: DateTableValue;

  tags?: TextTableValue;

  constructor(values: {
    title: string;
    content: string;
    dateCreated: number;
    dateUpdated: number;
    tags: string;
  }) {
    super();
    this.title = new TextTableValue(values.title);
    this.content = new TextTableValue(values.content);
    this.date_created = new DateTableValue(values.dateCreated);
    this.date_updated = new DateTableValue(values.dateUpdated);
    this.tags = new TextTableValue(values.tags);
  }
}
