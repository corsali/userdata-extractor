import {
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class GroupInteractions extends FacebookBaseModel {
  group_name?: TextTableValue;

  interaction_count?: IntegerTableValue;

  group_url?: UrlTableValue;

  constructor(groupName: string, interactionCount: number, groupUrl: string) {
    super();
    this.group_name = new TextTableValue(groupName);
    this.interaction_count = new IntegerTableValue(interactionCount);
    this.group_url = new UrlTableValue(groupUrl);
  }
}
