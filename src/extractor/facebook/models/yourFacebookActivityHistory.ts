import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourFacebookActivityHistory extends FacebookBaseModel {
  date_accessed?: DateTableValue;

  used_app?: TextTableValue;

  constructor(dateAccessed: number, usedApp: string) {
    super();
    this.date_accessed = new DateTableValue(dateAccessed);
    this.used_app = new TextTableValue(usedApp);
  }
}
