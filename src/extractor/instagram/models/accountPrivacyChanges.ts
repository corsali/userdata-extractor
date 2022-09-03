import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AccountPrivacyChanges extends InstagramBaseModel {
  change_title?: TextTableValue;

  date_changed?: DateTableValue;

  constructor(changeTitle: string, dateChanged: number) {
    super();
    this.change_title = new TextTableValue(changeTitle);
    this.date_changed = new DateTableValue(dateChanged);
  }
}
