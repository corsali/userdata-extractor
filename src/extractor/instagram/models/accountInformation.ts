import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AccountInformation extends InstagramBaseModel {
  contact_syncing?: BoolTableValue;

  first_country_code?: TextTableValue;

  has_shared_live_video?: BoolTableValue;

  last_login?: DateTableValue;

  last_logout?: DateTableValue;

  first_story_time?: DateTableValue;

  last_story_time?: DateTableValue;

  first_close_friends_story_time?: DateTableValue;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.contact_syncing = new BoolTableValue(valueMap.contact_syncing);
    this.has_shared_live_video = new BoolTableValue(
      valueMap.has_shared_live_video
    );
    this.first_country_code = new TextTableValue(valueMap.first_country_code);
    this.last_login = new DateTableValue(valueMap.last_login);
    this.last_logout = new DateTableValue(valueMap.last_logout);
    this.first_story_time = new DateTableValue(valueMap.first_story_time);
    this.last_story_time = new DateTableValue(valueMap.last_story_time);
    this.first_close_friends_story_time = new DateTableValue(
      valueMap.first_close_friends_story_time
    );
  }
}
