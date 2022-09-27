import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PeopleWhoFollowYou extends FacebookBaseModel {
  person_name?: TextTableValue;

  constructor(personName: string) {
    super();
    this.person_name = new TextTableValue(personName);
  }
}
