import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class ProfileChanges extends InstagramBaseModel {
  changed?: TextTableValue;

  previous_value?: TextTableValue;

  new_value?: TextTableValue;

  change_date?: DateTableValue;

  constructor(valueMap: {
    changed: string;
    previous_value: string;
    new_value: string;
    change_date: number;
  }) {
    super();
    this.changed = new TextTableValue(valueMap.changed);
    this.previous_value = new TextTableValue(valueMap.previous_value);
    this.new_value = new TextTableValue(valueMap.new_value);
    this.change_date = new DateTableValue(valueMap.change_date);
  }
}
