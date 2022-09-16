import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class LocationTimezone extends FacebookBaseModel {
  timezone?: TextTableValue;

  constructor(timezone: string) {
    super();
    this.timezone = new TextTableValue(timezone);
  }
}
