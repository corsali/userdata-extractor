import {
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AudienceInsights extends InstagramBaseModel {
  date_range?: TextTableValue;

  followers?: IntegerTableValue;

  constructor(dateRange: string, followers: number) {
    super();
    this.date_range = new TextTableValue(dateRange);
    this.followers = new IntegerTableValue(followers);
  }
}
