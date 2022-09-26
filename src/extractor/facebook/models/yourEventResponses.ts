import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourEventResponses extends FacebookBaseModel {
  event_name?: TextTableValue;

  date_start?: DateTableValue;

  date_end?: DateTableValue;

  your_response?: TextTableValue;

  place_name?: TextTableValue;

  place_address?: TextTableValue;

  latitude?: FloatTableValue;

  longitude?: FloatTableValue;

  description?: TextTableValue;

  date_created?: DateTableValue;

  constructor(values: {
    eventName: string;
    dateStart: number;
    dateEnd: number;
    yourResponse: string;
    placeName: string;
    placeAddress: string;
    latitude: number;
    longitude: number;
    description: string;
    dateCreated: number;
  }) {
    super();
    this.event_name = new TextTableValue(values.eventName);
    this.date_start = new DateTableValue(values.dateStart);
    this.date_end = new DateTableValue(values.dateEnd);
    this.your_response = new TextTableValue(values.yourResponse);
    this.place_name = new TextTableValue(values.placeName);
    this.place_address = new TextTableValue(values.placeAddress);
    this.latitude = new FloatTableValue(values.latitude);
    this.longitude = new FloatTableValue(values.longitude);
    this.description = new TextTableValue(values.description);
    this.date_created = new DateTableValue(values.dateCreated);
  }
}
