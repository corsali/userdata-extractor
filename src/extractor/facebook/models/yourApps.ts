import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourApps extends FacebookBaseModel {
  date_added?: DateTableValue;

  app_name?: TextTableValue;

  constructor(dateAdded: number, appName: string) {
    super();
    this.date_added = new DateTableValue(dateAdded);
    this.app_name = new TextTableValue(appName);
  }
}
