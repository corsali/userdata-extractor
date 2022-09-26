import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel";

export class ArchivedPosts extends InstagramBaseModel {
  title?: TextTableValue;

  date_posted?: DateTableValue;

  media?: JsonTableValue;

  constructor(title: string, datePosted: number, media: object) {
    super();
    this.title = new TextTableValue(title);
    this.date_posted = new DateTableValue(datePosted);
    this.media = new JsonTableValue(media);
  }
}
