import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourSearchHistory extends FacebookBaseModel {
  search_text?: TextTableValue;

  date_searched?: DateTableValue;

  constructor(searchText: string, dateSearched: number) {
    super();
    this.search_text = new TextTableValue(searchText);
    this.date_searched = new DateTableValue(dateSearched);
  }
}
