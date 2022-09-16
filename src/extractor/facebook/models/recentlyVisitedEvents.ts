import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyVisitedEvents extends FacebookBaseModel {
  event_name?: TextTableValue;

  event_url?: UrlTableValue;

  date_visited?: DateTableValue;

  constructor(eventName: string, eventUrl: string, dateVisited: number) {
    super();
    this.event_name = new TextTableValue(eventName);
    this.event_url = new UrlTableValue(eventUrl);
    this.date_visited = new DateTableValue(dateVisited);
  }
}
