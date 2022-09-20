import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyViewedMarketplaceItems extends FacebookBaseModel {
  item_name?: TextTableValue;

  item_uri?: UrlTableValue;

  interaction_date?: DateTableValue;

  constructor(itemName: string, itemUri: string, interactionDate: number) {
    super();
    this.item_name = new TextTableValue(itemName);
    this.item_uri = new UrlTableValue(itemUri);
    this.interaction_date = new DateTableValue(interactionDate);
  }
}
