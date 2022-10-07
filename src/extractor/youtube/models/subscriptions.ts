import { TextTableValue, UrlTableValue } from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class Subscriptions extends YoutubeBaseModel {
  channel_id?: TextTableValue;

  channel_url?: UrlTableValue;

  channel_title?: TextTableValue;

  constructor(channelId: string, channelUrl: string, channelTitle: string) {
    super();
    this.channel_id = new TextTableValue(channelId);
    this.channel_url = new UrlTableValue(channelUrl);
    this.channel_title = new TextTableValue(channelTitle);
  }
}
