import { DateTableValue, TextTableValue, UrlTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class FollowersAndFollowing extends InstagramBaseModel {
  url?: UrlTableValue;

  name?: TextTableValue;

  timestamp?: DateTableValue;

  constructor(valueMap: {
    url: string;
    name: string;
    timestamp: number;
  }) {
    super();
    this.url = new UrlTableValue(valueMap.url);
    this.name = new TextTableValue(valueMap.name);
    this.timestamp = new DateTableValue(valueMap.timestamp);
  }
}
