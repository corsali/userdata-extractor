import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AccountBasedIn extends InstagramBaseModel {
  primary_location?: TextTableValue;

  constructor(primaryLocation?: string) {
    super();
    this.primary_location = new TextTableValue(primaryLocation);
  }
}
