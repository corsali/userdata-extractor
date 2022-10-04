import {
  DateTableValue,
  FloatTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class LastLocation extends FacebookBaseModel {
  location_latitude?: FloatTableValue;

  location_longitude?: FloatTableValue;

  date_created?: DateTableValue;

  constructor(
    locationLatitude: number,
    locationLongitude: number,
    dateCreated: number
  ) {
    super();
    this.location_latitude = new FloatTableValue(locationLatitude);
    this.location_longitude = new FloatTableValue(locationLongitude);
    this.date_created = new DateTableValue(dateCreated);
  }
}
