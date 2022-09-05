import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class WordOrPhraseSearches extends InstagramBaseModel {
  search?: TextTableValue;

  date_searched?: DateTableValue;

  constructor(search: string, dateSearched: number) {
    super();
    this.search = new TextTableValue(search);
    this.date_searched = new DateTableValue(dateSearched);
  }
}
