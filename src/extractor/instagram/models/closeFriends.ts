import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class CloseFriends extends InstagramBaseModel {
  profile_url?: UrlTableValue;

  name?: TextTableValue;

  date_befriended?: DateTableValue;

  constructor(values: {
    profileUrl: string;
    name: string;
    dateBefriended: number;
  }) {
    super();
    this.profile_url = new UrlTableValue(values.profileUrl);
    this.name = new TextTableValue(values.name);
    this.date_befriended = new DateTableValue(values.dateBefriended);
  }
}
