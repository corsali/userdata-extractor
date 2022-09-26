import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourLocations extends FacebookBaseModel {
  location_name?: TextTableValue;

  constructor(locationName: string) {
    super();
    this.location_name = new TextTableValue(locationName);
  }
}
