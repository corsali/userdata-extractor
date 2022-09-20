import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class ProfileUpdateHistory extends FacebookBaseModel {
  update_title?: TextTableValue;

  date_updated?: DateTableValue;

  constructor(updateTitle: string, dateUpdated: number) {
    super();
    this.update_title = new TextTableValue(updateTitle);
    this.date_updated = new DateTableValue(dateUpdated);
  }
}
