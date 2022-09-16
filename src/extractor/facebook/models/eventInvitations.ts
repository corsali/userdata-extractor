import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class EventInvitations extends FacebookBaseModel {
  event_name?: TextTableValue;

  date_start?: DateTableValue;

  date_end?: DateTableValue;

  constructor(eventName: string, dateStart: number, dateEnd: number) {
    super();
    this.event_name = new TextTableValue(eventName);
    this.date_start = new DateTableValue(dateStart);
    this.date_end = new DateTableValue(dateEnd);
  }
}
