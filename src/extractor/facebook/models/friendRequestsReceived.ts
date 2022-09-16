import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class FriendRequestsReceived extends FacebookBaseModel {
  person_name?: TextTableValue;

  date_request_received?: DateTableValue;

  constructor(personName: string, dateRequestReceived: number) {
    super();
    this.person_name = new TextTableValue(personName);
    this.date_request_received = new DateTableValue(dateRequestReceived);
  }
}
