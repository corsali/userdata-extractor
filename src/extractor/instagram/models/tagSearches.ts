import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class TagSearches extends InstagramBaseModel {
  search_tag?: TextTableValue;

  date_searched?: DateTableValue;

  constructor(searchTag: string, dateSearched: number) {
    super();
    this.search_tag = new TextTableValue(searchTag);
    this.date_searched = new DateTableValue(dateSearched);
  }
}
