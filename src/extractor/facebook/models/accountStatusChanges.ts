import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AccountStatusChanges extends FacebookBaseModel {
  status_change?: TextTableValue;

  date_changed?: DateTableValue;

  constructor(listTitle: string, dateChanged: number) {
    super();
    this.status_change = new TextTableValue(listTitle);
    this.date_changed = new DateTableValue(dateChanged);
  }
}
