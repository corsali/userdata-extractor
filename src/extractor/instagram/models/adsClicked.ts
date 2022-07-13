import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AdsClicked extends InstagramBaseModel {
  ad_title?: TextTableValue;

  date_clicked?: DateTableValue;

  constructor(adTitle: string, dateClicked: string) {
    super();
    this.ad_title = new TextTableValue(adTitle);
    this.date_clicked = new DateTableValue(dateClicked);
  }
}
