import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyVisitedGroups extends FacebookBaseModel {
  group_name?: TextTableValue;

  group_url?: UrlTableValue;

  date_visited?: DateTableValue;

  constructor(groupName: string, groupUrl: string, dateVisited: number) {
    super();
    this.group_name = new TextTableValue(groupName);
    this.group_url = new UrlTableValue(groupUrl);
    this.date_visited = new DateTableValue(dateVisited);
  }
}
