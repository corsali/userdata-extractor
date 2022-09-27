import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PagesYouHaveUnfollowed extends FacebookBaseModel {
  page_name?: TextTableValue;

  date_unfollowed?: DateTableValue;

  constructor(pageName: string, dateUnfollowed: number) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.date_unfollowed = new DateTableValue(dateUnfollowed);
  }
}
