import { BoolItem, DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AccountInformation extends InstagramBaseModel {
  contact_syncing?: BoolItem;

  first_country_code?: TextItem;

  has_shared_live_video?: BoolItem;

  last_login?: DateItem;

  last_logout?: DateItem;

  first_story_time?: DateItem;

  last_story_time?: DateItem;

  first_close_friends_story_time?: DateItem;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.contact_syncing = new BoolItem(valueMap.contact_syncing);
    this.has_shared_live_video = new BoolItem(valueMap.has_shared_live_video);
    this.first_country_code = new TextItem(valueMap.first_country_code);
    this.last_login = new DateItem(valueMap.last_login);
    this.last_logout = new DateItem(valueMap.last_logout);
    this.first_story_time = new DateItem(valueMap.first_story_time);
    this.last_story_time = new DateItem(valueMap.last_story_time);
    this.first_close_friends_story_time = new DateItem(
      valueMap.first_close_friends_story_time
    );
  }
}
