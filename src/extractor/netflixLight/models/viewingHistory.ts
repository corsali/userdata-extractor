import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { NetflixLightBaseModel } from "./netflixLightBaseModel.js";

export class ViewingHistory extends NetflixLightBaseModel {
  title?: TextTableValue;

  date?: DateTableValue;

  constructor(title?: string, date?: string) {
    super();
    this.title = new TextTableValue(title);
    this.date = new DateTableValue(date);
  }
}
