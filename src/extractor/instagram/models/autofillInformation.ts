import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AutofillInformation extends InstagramBaseModel {
  field_name?: TextTableValue;

  field_value?: TextTableValue;

  constructor(fieldName: string, fieldValue: string) {
    super();
    this.field_name = new TextTableValue(fieldName);
    this.field_value = new TextTableValue(fieldValue);
  }
}
