import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class FriendPeerGroup extends FacebookBaseModel {
  group_name?: TextTableValue;

  constructor(group: string) {
    super();
    this.group_name = new TextTableValue(group);
  }
}
