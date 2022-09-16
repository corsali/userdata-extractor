import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyVisitedPages extends FacebookBaseModel {
  page_name?: TextTableValue;

  page_url?: UrlTableValue;

  date_visited?: DateTableValue;

  constructor(pageName: string, pageUrl: string, dateVisited: number) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.page_url = new UrlTableValue(pageUrl);
    this.date_visited = new DateTableValue(dateVisited);
  }
}
