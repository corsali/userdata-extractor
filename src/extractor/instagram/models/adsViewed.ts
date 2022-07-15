import { DateTableValue, TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class AdsViewed extends InstagramBaseModel {
  ad_author?: TextTableValue;

  date_viewed?: DateTableValue;

  constructor(adAuthor: string, dateViewed: string) {
    super();
    this.ad_author = new TextTableValue(adAuthor);
    this.date_viewed = new DateTableValue(dateViewed);
  }
}
