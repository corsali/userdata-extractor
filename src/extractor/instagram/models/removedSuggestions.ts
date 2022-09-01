import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class RemovedSuggestions extends InstagramBaseModel {
  name?: TextTableValue;

  profile_url?: UrlTableValue;

  date_removed?: DateTableValue;

  constructor(name: string, profileUrl: string, dateRemoved: number) {
    super();
    this.name = new TextTableValue(name);
    this.profile_url = new UrlTableValue(profileUrl);
    this.date_removed = new DateTableValue(dateRemoved);
  }
}
