import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PagesYouHaveRecommended extends FacebookBaseModel {
  page_name?: TextTableValue;

  date_recommended?: DateTableValue;

  page_url?: UrlTableValue;

  constructor(pageName: string, dateRecommended: number, pageUrl: string) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.date_recommended = new DateTableValue(dateRecommended);
    this.page_url = new UrlTableValue(pageUrl);
  }
}
