import {
  DateTableValue,
  // IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class SearchHistory extends YoutubeBaseModel {
  platform?: TextTableValue;

  action_type?: TextTableValue;

  video_title?: TextTableValue;

  video_url?: UrlTableValue;

  action_date?: DateTableValue;

  // watched_times?: IntegerTableValue;

  products?: TextTableValue;

  details?: TextTableValue;

  settings_info?: TextTableValue;

  constructor(values: {
    platform: string;
    actionType: string;
    videoTitle: string;
    videoUrl: string;
    actionDate: number | string | Date;
    // watchedTimes: number;
    products: string;
    details: string;
    settingsInfo: string;
  }) {
    super();
    this.platform = new TextTableValue(values.platform);
    this.action_type = new TextTableValue(values.actionType);
    this.video_title = new TextTableValue(values.videoTitle);
    this.video_url = new UrlTableValue(values.videoUrl);
    this.action_date = new DateTableValue(values.actionDate);
    // this.watched_times = new IntegerTableValue(values.watchedTimes);
    this.products = new TextTableValue(values.products);
    this.details = new TextTableValue(values.details);
    this.settings_info = new TextTableValue(values.settingsInfo);
  }
}
