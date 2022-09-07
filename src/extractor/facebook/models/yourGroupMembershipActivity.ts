import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourGroupMembershipActivity extends FacebookBaseModel {
  group_name?: TextTableValue;

  activity_date?: TextTableValue;

  activity_title?: TextTableValue;

  constructor(values: {
    groupName: string;
    activityDate: number;
    activityTitle: string;
  }) {
    super();
    this.group_name = new TextTableValue(values.groupName);
    this.activity_date = new DateTableValue(values.activityDate);
    this.activity_title = new TextTableValue(values.activityTitle);
  }
}
