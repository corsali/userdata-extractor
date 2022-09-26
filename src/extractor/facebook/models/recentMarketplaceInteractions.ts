import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentMarketplaceInteractions extends FacebookBaseModel {
  interaction_name?: TextTableValue;

  interaction_description?: TextTableValue;

  interaction_date?: DateTableValue;

  constructor(
    interactionName: string,
    interactionDescription: string,
    interactionDate: number | string
  ) {
    super();
    this.interaction_name = new TextTableValue(interactionName);
    this.interaction_description = new TextTableValue(interactionDescription);
    this.interaction_date = new DateTableValue(interactionDate);
  }
}
