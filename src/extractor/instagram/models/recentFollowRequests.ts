import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class RecentFollowRequests extends InstagramBaseModel {
  profile_url?: UrlTableValue;

  name?: TextTableValue;

  date_followed?: DateTableValue;

  constructor(values: {
    profileUrl: string;
    name: string;
    dateFollowed: number;
  }) {
    super();
    this.profile_url = new UrlTableValue(values.profileUrl);
    this.name = new TextTableValue(values.name);
    this.date_followed = new DateTableValue(values.dateFollowed);
  }
}