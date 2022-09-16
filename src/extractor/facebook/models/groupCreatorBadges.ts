import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class GroupCreatorBadges extends FacebookBaseModel {
  group_name?: TextTableValue;

  badge?: TextTableValue;

  constructor(groupName: string, badge: string) {
    super();
    this.group_name = new TextTableValue(groupName);
    this.badge = new TextTableValue(badge);
  }
}
