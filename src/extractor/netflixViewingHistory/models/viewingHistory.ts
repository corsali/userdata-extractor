import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { NetflixViewingHistoryBaseModel } from "./netflixViewingHistoryBaseModel.js";

export class ViewingHistory extends NetflixViewingHistoryBaseModel {
  title?: TextTableValue;

  date?: DateTableValue;

  constructor(title?: string, date?: string) {
    super();
    this.title = new TextTableValue(title);
    this.date = new DateTableValue(date);
  }
}
