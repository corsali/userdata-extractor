import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyViewedAds extends FacebookBaseModel {
  ad_name?: TextTableValue;

  ad_uri?: UrlTableValue;

  interaction_date?: DateTableValue;

  constructor(adName: string, adUri: string, interactionDate: number) {
    super();
    this.ad_name = new TextTableValue(adName);
    this.ad_uri = new UrlTableValue(adUri);
    this.interaction_date = new DateTableValue(interactionDate);
  }
}
