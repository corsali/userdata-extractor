import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourPages extends FacebookBaseModel {
  page_name?: TextTableValue;

  date_created?: DateTableValue;

  page_url?: UrlTableValue;

  constructor(pageName: string, dateCreated: number, pageUrl: string) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.date_created = new DateTableValue(dateCreated);
    this.page_url = new UrlTableValue(pageUrl);
  }
}
