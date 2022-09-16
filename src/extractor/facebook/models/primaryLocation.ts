import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PrimaryLocation extends FacebookBaseModel {
  city?: TextTableValue;

  region?: TextTableValue;

  zip_code?: TextTableValue;

  constructor(city: string, region: string, zipCode: string) {
    super();
    this.city = new TextTableValue(city);
    this.region = new TextTableValue(region);
    this.zip_code = new TextTableValue(zipCode);
  }
}
