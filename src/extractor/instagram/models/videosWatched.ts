import { DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class VideosWatched extends InstagramBaseModel {
  video_author?: TextItem;

  date_viewed?: DateItem;

  constructor(videoAuthor: string, dateViewed: string) {
    super();
    this.video_author = new TextItem(videoAuthor);
    this.date_viewed = new DateItem(dateViewed);
  }
}
