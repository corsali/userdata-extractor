import { UrlTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class SeeMoreLikeThis extends FacebookBaseModel {
  news_url?: UrlTableValue;

  constructor(newsUrl: string) {
    super();
    this.news_url = new UrlTableValue(newsUrl);
  }
}
