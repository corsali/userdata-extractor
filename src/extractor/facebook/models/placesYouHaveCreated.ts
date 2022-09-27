import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class PlacesYouHaveCreated extends FacebookBaseModel {
  place_name?: TextTableValue;

  coordinate_latitude?: FloatTableValue;

  coordinate_longitude?: FloatTableValue;

  address?: TextTableValue;

  url?: UrlTableValue;

  date_created?: DateTableValue;

  constructor(values: {
    placeName: string;
    coordinateLatitude: number;
    coordinateLongitude: number;
    address: string;
    url: string;
    dateCreated: number;
  }) {
    super();
    this.place_name = new TextTableValue(values.placeName);
    this.coordinate_latitude = new FloatTableValue(values.coordinateLatitude);
    this.coordinate_longitude = new FloatTableValue(values.coordinateLongitude);
    this.address = new TextTableValue(values.address);
    this.url = new UrlTableValue(values.url);
    this.date_created = new DateTableValue(values.dateCreated);
  }
}
