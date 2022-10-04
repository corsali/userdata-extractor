import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class RecentlyDeletedContent extends InstagramBaseModel {
  title?: TextTableValue;

  date_created?: DateTableValue;

  media?: JsonTableValue;

  constructor(title: string, dateCreated: number, media: object) {
    super();
    this.title = new TextTableValue(title);
    this.date_created = new DateTableValue(dateCreated);
    this.media = new JsonTableValue(media);
  }
}
