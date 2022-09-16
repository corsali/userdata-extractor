import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyViewedVideos extends FacebookBaseModel {
  facebook_watch_datatype_name?: TextTableValue;

  facebook_watch_datatype_description?: TextTableValue;

  video_name?: TextTableValue;

  video_type?: TextTableValue;

  date_watched?: DateTableValue;

  video_link?: UrlTableValue;

  watch_position_seconds?: FloatTableValue;

  constructor(values: {
    facebookWatch?: { datatypeName: string; datatypeDescription: string };
    videoName: string;
    videoType: string;
    dateWatched: number;
    videoLink: string;
    watchPositionSeconds?: number | string;
  }) {
    super();
    this.facebook_watch_datatype_name = new TextTableValue(
      values.facebookWatch?.datatypeName
    );
    this.facebook_watch_datatype_description = new TextTableValue(
      values.facebookWatch?.datatypeDescription
    );
    this.video_name = new TextTableValue(values.videoName);
    this.video_type = new TextTableValue(values.videoType);
    this.date_watched = new DateTableValue(values.dateWatched);
    this.video_link = new UrlTableValue(values.videoLink);
    this.watch_position_seconds = new FloatTableValue(
      values.watchPositionSeconds
    );
  }
}
