import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PagesYouHaveLiked extends FacebookBaseModel {
  page_name?: TextTableValue;

  date_liked?: DateTableValue;

  constructor(pageName: string, dateLiked: number) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.date_liked = new DateTableValue(dateLiked);
  }
}
