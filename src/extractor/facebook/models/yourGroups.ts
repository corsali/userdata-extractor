import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourGroups extends FacebookBaseModel {
  group_name?: TextTableValue;

  // @todo I am not sure what this value means, but don't want to lose it. It
  // could be date_started_admin or date_created or something else...
  date?: BoolTableValue;

  constructor(groupName: string, date: number) {
    super();
    this.group_name = new TextTableValue(groupName);
    this.date = new DateTableValue(date);
  }
}
