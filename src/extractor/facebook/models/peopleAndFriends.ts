import { TextTableValue, UrlTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PeopleAndFriends extends FacebookBaseModel {
  person_name?: TextTableValue;

  person_url?: UrlTableValue;

  constructor(personName: string, personUrl: string) {
    super();
    this.person_name = new TextTableValue(personName);
    this.person_url = new UrlTableValue(personUrl);
  }
}
