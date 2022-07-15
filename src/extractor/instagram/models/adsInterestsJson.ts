import { TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class AdsInterests extends InstagramBaseModel {
  /**
   * Exists: JSON
   */
  interest?: TextTableValue;

  constructor(adInterest?: string) {
    super();
    this.interest = new TextTableValue(adInterest);
  }
}
