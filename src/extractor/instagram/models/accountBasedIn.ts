import { TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class AccountBasedIn extends InstagramBaseModel {
  primary_location?: TextTableValue;

  constructor(primaryLocation?: string) {
    super();
    this.primary_location = new TextTableValue(primaryLocation);
  }
}
