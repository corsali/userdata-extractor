import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Friends extends FacebookBaseModel {
  person_name?: TextTableValue;

  date_befriended?: DateTableValue;

  constructor(personName: string, dateBefriended: number) {
    super();
    this.person_name = new TextTableValue(personName);
    this.date_befriended = new DateTableValue(dateBefriended);
  }
}
