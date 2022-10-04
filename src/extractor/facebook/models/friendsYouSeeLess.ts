import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class FriendsYouSeeLess extends FacebookBaseModel {
  person_name?: TextTableValue;

  action_date?: DateTableValue;

  person_url?: UrlTableValue;

  constructor(personName: string, actionDate: number, personUrl: string) {
    super();
    this.person_name = new TextTableValue(personName);
    this.action_date = new DateTableValue(actionDate);
    this.person_url = new UrlTableValue(personUrl);
  }
}
