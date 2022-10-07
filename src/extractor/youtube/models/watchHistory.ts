import {
  DateTableValue,
  // IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class WatchHistory extends YoutubeBaseModel {
  platform?: TextTableValue;

  video_title?: TextTableValue;

  video_url?: UrlTableValue;

  channel_name?: TextTableValue;

  channel_url?: UrlTableValue;

  date_watched?: DateTableValue;

  // watched_times?: IntegerTableValue;

  products?: TextTableValue;

  details?: TextTableValue;

  settings_info?: TextTableValue;

  constructor(values: {
    platform: string;
    videoTitle: string;
    videoUrl: string;
    channelName: string;
    channelUrl: string;
    dateWatched: number | string | Date;
    // watchedTimes: number;
    products: string;
    details: string;
    settingsInfo: string;
  }) {
    super();
    this.platform = new TextTableValue(values.platform);
    this.video_title = new TextTableValue(values.videoTitle);
    this.video_url = new UrlTableValue(values.videoUrl);
    this.channel_name = new TextTableValue(values.channelName);
    this.channel_url = new UrlTableValue(values.channelUrl);
    this.date_watched = new DateTableValue(values.dateWatched);
    // this.watched_times = new IntegerTableValue(values.watchedTimes);
    this.products = new TextTableValue(values.products);
    this.details = new TextTableValue(values.details);
    this.settings_info = new TextTableValue(values.settingsInfo);
  }
}
