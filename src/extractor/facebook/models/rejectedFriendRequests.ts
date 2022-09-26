import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RejectedFriendRequests extends FacebookBaseModel {
  person_name?: TextTableValue;

  date_rejected?: DateTableValue;

  constructor(personName: string, dateRejected: number) {
    super();
    this.person_name = new TextTableValue(personName);
    this.date_rejected = new DateTableValue(dateRejected);
  }
}
