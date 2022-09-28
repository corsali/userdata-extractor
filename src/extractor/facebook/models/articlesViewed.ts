import { DateTableValue, UrlTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class ArticlesViewed extends FacebookBaseModel {
  news_url?: UrlTableValue;

  date_clicked?: DateTableValue;

  constructor(newsUrl: string, dateClicked: number) {
    super();
    this.news_url = new UrlTableValue(newsUrl);
    this.date_clicked = new DateTableValue(dateClicked);
  }
}
