import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class BlockedAccounts extends InstagramBaseModel {
  name?: TextTableValue;

  profile_url?: UrlTableValue;

  date_blocked?: DateTableValue;

  constructor(name: string, profileUrl: string, dateBlocked: number) {
    super();
    this.name = new TextTableValue(name);
    this.profile_url = new UrlTableValue(profileUrl);
    this.date_blocked = new DateTableValue(dateBlocked);
  }
}
