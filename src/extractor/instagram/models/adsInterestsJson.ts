import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AdsInterests extends InstagramBaseModel {
  interest?: TextTableValue;

  constructor(adInterest?: string) {
    super();
    this.interest = new TextTableValue(adInterest);
  }
}
