import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class BuyerAndSellerRatings extends FacebookBaseModel {
  date_rated?: DateTableValue;

  rating_title?: TextTableValue;

  item_name?: TextTableValue;

  attachments?: JsonTableValue;

  constructor(values: {
    dateRated: number;
    ratingTitle: string;
    itemName: string;
    attachments: object;
  }) {
    super();
    this.date_rated = new DateTableValue(values.dateRated);
    this.rating_title = new TextTableValue(values.ratingTitle);
    this.item_name = new TextTableValue(values.itemName);
    this.attachments = new JsonTableValue(values.attachments);
  }
}
