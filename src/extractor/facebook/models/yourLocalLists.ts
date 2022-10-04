import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourLocalLists extends FacebookBaseModel {
  list_title?: TextTableValue;

  date_created?: DateTableValue;

  description?: TextTableValue;

  place_name?: TextTableValue;

  place_latitude?: FloatTableValue;

  place_longitude?: FloatTableValue;

  place_address?: TextTableValue;

  constructor(values: {
    listTitle: string;
    dateCreated: number;
    description: string;
    placeName: string;
    placeLatitude: number;
    placeLongitude: number;
    placeAddress: string;
  }) {
    super();
    this.list_title = new TextTableValue(values.listTitle);
    this.date_created = new DateTableValue(values.dateCreated);
    this.description = new TextTableValue(values.description);
    this.place_name = new TextTableValue(values.placeName);
    this.place_latitude = new FloatTableValue(values.placeLatitude);
    this.place_longitude = new FloatTableValue(values.placeLongitude);
    this.place_address = new TextTableValue(values.placeAddress);
  }
}
