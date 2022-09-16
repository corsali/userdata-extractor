import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AdvertisersYouInteractedWith extends FacebookBaseModel {
  advertiser_title?: TextTableValue;

  interaction_type?: TextTableValue;

  date_interacted?: DateTableValue;

  constructor(
    advertiserTitle: string,
    interactionType: string,
    dateInteracted: number
  ) {
    super();
    this.advertiser_title = new TextTableValue(advertiserTitle);
    this.interaction_type = new TextTableValue(interactionType);
    this.date_interacted = new DateTableValue(dateInteracted);
  }
}
