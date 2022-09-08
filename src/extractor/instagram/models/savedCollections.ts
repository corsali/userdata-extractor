import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class SavedCollections extends InstagramBaseModel {
  name?: TextTableValue;

  created_date?: DateTableValue;

  updated_date?: DateTableValue;

  shared_url?: UrlTableValue;

  shared_username?: TextTableValue;

  shared_date?: DateTableValue;

  constructor(values: {
    name?: string;
    createdDate?: number;
    updatedDate?: number;
    sharedUrl?: string;
    sharedUsername?: string;
    sharedDate?: number;
  }) {
    super();
    this.name = new TextTableValue(values.name);
    this.created_date = new DateTableValue(values.createdDate);
    this.updated_date = new DateTableValue(values.updatedDate);
    this.shared_url = new UrlTableValue(values.sharedUrl);
    this.shared_username = new TextTableValue(values.sharedUsername);
    this.shared_date = new DateTableValue(values.sharedDate);
  }
}
