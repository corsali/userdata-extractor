import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class LocationHistory extends FacebookBaseModel {
  location_name?: TextTableValue;

  location_latitude?: FloatTableValue;

  location_longitude?: FloatTableValue;

  date_created?: DateTableValue;

  constructor(
    locationName: string,
    locationLatitude: number,
    locationLongitude: number,
    dateCreated: number
  ) {
    super();
    this.location_name = new TextTableValue(locationName);
    this.location_latitude = new FloatTableValue(locationLatitude);
    this.location_longitude = new FloatTableValue(locationLongitude);
    this.date_created = new DateTableValue(dateCreated);
  }
}
