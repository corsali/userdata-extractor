import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class FollowingHashtags extends InstagramBaseModel {
  hashtag_url?: UrlTableValue;

  hashtag?: TextTableValue;

  date_followed?: DateTableValue;

  constructor(valueMap: {
    hashtagUrl: string;
    hashtag: string;
    dateFollowed: number;
  }) {
    super();
    this.hashtag_url = new UrlTableValue(valueMap.hashtagUrl);
    this.hashtag = new TextTableValue(valueMap.hashtag);
    this.date_followed = new DateTableValue(valueMap.dateFollowed);
  }
}
