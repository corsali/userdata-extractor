import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class OffFacebookActivity extends FacebookBaseModel {
  activity_name?: TextTableValue;

  activity_id?: TextTableValue;

  activity_type?: TextTableValue;

  date_occured?: DateTableValue;

  constructor(values: {
    activityName: string;
    activityId: string;
    activityType: string;
    dateOccured: number;
  }) {
    super();
    this.activity_name = new TextTableValue(values.activityName);
    this.activity_id = new TextTableValue(values.activityId);
    this.activity_type = new TextTableValue(values.activityType);
    this.date_occured = new DateTableValue(values.dateOccured);
  }
}
