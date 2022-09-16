import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class InformationSubmittedToAdvertisers extends FacebookBaseModel {
  label?: TextTableValue;

  value?: TextTableValue;

  constructor(label: string, value: string) {
    super();
    this.label = new TextTableValue(label);
    this.value = new TextTableValue(value);
  }
}
