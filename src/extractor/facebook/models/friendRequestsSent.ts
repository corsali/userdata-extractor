import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class FriendRequestsSent extends FacebookBaseModel {
  person_name?: TextTableValue;

  date_request_sent?: DateTableValue;

  constructor(personName: string, dateRequestSent: number) {
    super();
    this.person_name = new TextTableValue(personName);
    this.date_request_sent = new DateTableValue(dateRequestSent);
  }
}
