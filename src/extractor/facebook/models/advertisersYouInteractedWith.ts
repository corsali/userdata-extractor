import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AdvertisersYouInteractedWith extends FacebookBaseModel {
  advertiser_name?: TextTableValue;

  interaction_type?: TextTableValue;

  date_interacted?: DateTableValue;

  constructor(
    advertiserName: string,
    interactionType: string,
    dateInteracted: number
  ) {
    super();
    this.advertiser_name = new TextTableValue(advertiserName);
    this.interaction_type = new TextTableValue(interactionType);
    this.date_interacted = new DateTableValue(dateInteracted);
  }
}
