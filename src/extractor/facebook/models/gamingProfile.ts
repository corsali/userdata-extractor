import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class GamingProfile extends FacebookBaseModel {
  player_name?: TextTableValue;

  avatar_uri?: UrlTableValue;

  date_added_avatar?: DateTableValue;

  constructor(playerName: string, avatarUrl: string, dateAddedAvatar: number) {
    super();
    this.player_name = new TextTableValue(playerName);
    this.avatar_uri = new UrlTableValue(avatarUrl);
    this.date_added_avatar = new DateTableValue(dateAddedAvatar);
  }
}
