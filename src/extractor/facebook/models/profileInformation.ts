import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class ProfileInformation extends FacebookBaseModel {
  field_name?: TextTableValue;

  field_text?: TextTableValue;

  field_date?: DateTableValue;

  constructor(fieldName: string, fieldText: string, fieldDate?: number | Date) {
    super();
    this.field_name = new TextTableValue(fieldName);
    this.field_text = new TextTableValue(fieldText);
    this.field_date = new DateTableValue(fieldDate);
  }
}
