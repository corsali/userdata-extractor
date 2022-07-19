import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AdsViewed extends InstagramBaseModel {
  ad_author?: TextTableValue;

  date_viewed?: DateTableValue;

  constructor(adAuthor: string, dateViewed: string) {
    super();
    this.ad_author = new TextTableValue(adAuthor);
    this.date_viewed = new DateTableValue(dateViewed);
  }
}
