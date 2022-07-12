import { DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AdsClicked extends InstagramBaseModel {
  ad_title?: TextItem;

  date_clicked?: DateItem;

  constructor(adTitle: string, dateClicked: string) {
    super();
    this.ad_title = new TextItem(adTitle);
    this.date_clicked = new DateItem(dateClicked);
  }
}
