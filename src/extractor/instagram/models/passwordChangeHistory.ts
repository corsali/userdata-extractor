import { DateTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PasswordChangeHistory extends InstagramBaseModel {
  date_changed?: DateTableValue;

  constructor(dateChanged: number) {
    super();
    this.date_changed = new DateTableValue(dateChanged);
  }
}
