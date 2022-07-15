import { DateTableValue, TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class VideosWatched extends InstagramBaseModel {
  video_author?: TextTableValue;

  date_viewed?: DateTableValue;

  constructor(videoAuthor: string, dateViewed: string) {
    super();
    this.video_author = new TextTableValue(videoAuthor);
    this.date_viewed = new DateTableValue(dateViewed);
  }
}
