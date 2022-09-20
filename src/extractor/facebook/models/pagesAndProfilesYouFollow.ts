import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PagesAndProfilesYouFollow extends FacebookBaseModel {
  page_name?: TextTableValue;

  date_followed?: DateTableValue;

  constructor(pageName: string, dateFollowed: number) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.date_followed = new DateTableValue(dateFollowed);
  }
}
