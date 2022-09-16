import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyVisitedProfiles extends FacebookBaseModel {
  profile_name?: TextTableValue;

  profile_url?: UrlTableValue;

  date_visited?: DateTableValue;

  constructor(profileName: string, profileUrl: string, dateVisited: number) {
    super();
    this.profile_name = new TextTableValue(profileName);
    this.profile_url = new UrlTableValue(profileUrl);
    this.date_visited = new DateTableValue(dateVisited);
  }
}
