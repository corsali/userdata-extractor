import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class ItemsSold extends FacebookBaseModel {
  item_title?: TextTableValue;

  price?: TextTableValue;

  seller_name?: TextTableValue;

  date_created?: DateTableValue;

  date_updated?: DateTableValue;

  category?: TextTableValue;

  marketplace?: TextTableValue;

  location_latitude?: FloatTableValue;

  location_longitude?: FloatTableValue;

  description?: TextTableValue;

  constructor(values: {
    itemTitle: string;
    price: string;
    sellerName: string;
    dateCreated: number;
    dateUpdated: number;
    category: string;
    marketplace: string;
    locationLatitude: number;
    locationLongitude: number;
    description: string;
  }) {
    super();
    this.item_title = new TextTableValue(values.itemTitle);
    this.price = new TextTableValue(values.price);
    this.seller_name = new TextTableValue(values.sellerName);
    this.date_created = new DateTableValue(values.dateCreated);
    this.date_updated = new DateTableValue(values.dateUpdated);
    this.category = new TextTableValue(values.category);
    this.marketplace = new TextTableValue(values.marketplace);
    this.location_latitude = new FloatTableValue(values.locationLatitude);
    this.location_longitude = new FloatTableValue(values.locationLongitude);
    this.description = new TextTableValue(values.description);
  }
}
