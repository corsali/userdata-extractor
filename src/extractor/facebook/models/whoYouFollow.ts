import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class WhoYouFollow extends FacebookBaseModel {
  person_name?: TextTableValue;

  date_followed?: DateTableValue;

  constructor(personName: string, dateRejected: number) {
    super();
    this.person_name = new TextTableValue(personName);
    this.date_followed = new DateTableValue(dateRejected);
  }
}
