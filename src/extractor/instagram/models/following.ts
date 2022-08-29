import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class Following extends InstagramBaseModel {
  profile_url?: UrlTableValue;

  name?: TextTableValue;

  date_followed?: DateTableValue;

  constructor(valueMap: {
    profileUrl: string;
    name: string;
    dateFollowed: number;
  }) {
    super();
    this.profile_url = new UrlTableValue(valueMap.profileUrl);
    this.name = new TextTableValue(valueMap.name);
    this.date_followed = new DateTableValue(valueMap.dateFollowed);
  }
}
