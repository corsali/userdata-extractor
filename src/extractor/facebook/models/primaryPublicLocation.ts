import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PrimaryPublicLocation extends FacebookBaseModel {
  city?: TextTableValue;

  region?: TextTableValue;

  country?: TextTableValue;

  constructor(city: string, region: string, country: string) {
    super();
    this.city = new TextTableValue(city);
    this.region = new TextTableValue(region);
    this.country = new TextTableValue(country);
  }
}
