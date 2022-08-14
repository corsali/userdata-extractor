import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class Stories extends InstagramBaseModel {
  uri?: TextTableValue;

  date_created?: DateTableValue;

  title?: TextTableValue;

  constructor(uri: string, dateCreated: string, title: string) {
    super();
    this.uri = new TextTableValue(uri);
    this.date_created = new DateTableValue(dateCreated);
    this.title = new TextTableValue(title);
  }
}
