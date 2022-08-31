import {
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AudienceInsights extends InstagramBaseModel {
  date_range_from?: TextTableValue;

  date_range_to?: TextTableValue;

  followers?: IntegerTableValue;

  constructor(dateRangeFrom: string, dateRangeTo: string, followers: number) {
    super();
    this.date_range_from = new TextTableValue(dateRangeFrom);
    this.date_range_to = new TextTableValue(dateRangeTo);
    this.followers = new IntegerTableValue(followers);
  }
}
