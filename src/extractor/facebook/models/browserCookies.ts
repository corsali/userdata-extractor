import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class BrowserCookies extends FacebookBaseModel {
  datr_cookie?: TextTableValue;

  date_used?: DateTableValue;

  constructor(datrCookie: string, dateUsed: number) {
    super();
    this.datr_cookie = new TextTableValue(datrCookie);
    this.date_used = new DateTableValue(dateUsed);
  }
}
