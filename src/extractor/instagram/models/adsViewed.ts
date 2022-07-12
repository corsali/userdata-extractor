import { DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AdsViewed extends InstagramBaseModel {
  ad_author?: TextItem;

  date_viewed?: DateItem;

  constructor(adAuthor: string, dateViewed: string) {
    super();
    this.ad_author = new TextItem(adAuthor);
    this.date_viewed = new DateItem(dateViewed);
  }
}
