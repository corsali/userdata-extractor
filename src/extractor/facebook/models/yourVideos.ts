import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourVideos extends FacebookBaseModel {
  video_title?: TextTableValue;

  video_uri?: UrlTableValue;

  date_created?: DateTableValue;

  media_metadata?: JsonTableValue;

  thumbnail_uri?: UrlTableValue;

  description?: TextTableValue;

  constructor(values: {
    videoTitle: string;
    videoUri: string;
    dateCreated: number;
    mediaMetadata: object;
    thumbnailUri: string;
    description: string;
  }) {
    super();
    this.video_title = new TextTableValue(values.videoTitle);
    this.video_uri = new UrlTableValue(values.videoUri);
    this.date_created = new DateTableValue(values.dateCreated);
    this.media_metadata = new JsonTableValue(values.mediaMetadata);
    this.thumbnail_uri = new UrlTableValue(values.thumbnailUri);
    this.description = new TextTableValue(values.description);
  }
}
