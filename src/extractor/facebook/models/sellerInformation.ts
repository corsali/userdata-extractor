import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class SellerInformation extends FacebookBaseModel {
  field_name?: TextTableValue;

  field_value?: TextTableValue;

  field_date?: DateTableValue;

  constructor(values: {
    fieldName: string;
    fieldValue?: string;
    fieldDate?: number | Date;
  }) {
    super();
    this.field_name = new TextTableValue(values.fieldName);
    this.field_value = new TextTableValue(values.fieldValue);
    this.field_date = new DateTableValue(values.fieldDate);
  }
}
