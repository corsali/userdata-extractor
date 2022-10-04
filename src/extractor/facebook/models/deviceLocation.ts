import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class DeviceLocation extends FacebookBaseModel {
  spn?: TextTableValue;

  country_code?: TextTableValue;

  constructor(spn: string, countryCode: string) {
    super();
    this.spn = new TextTableValue(spn);
    this.country_code = new TextTableValue(countryCode);
  }
}
