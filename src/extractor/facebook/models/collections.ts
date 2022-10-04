import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Collections extends FacebookBaseModel {
  activity_title?: TextTableValue;

  collection_name?: TextTableValue;

  date_created?: DateTableValue;

  constructor(
    activityTitle: string,
    collectionName: string,
    dateCreated: number
  ) {
    super();
    this.activity_title = new TextTableValue(activityTitle);
    this.collection_name = new TextTableValue(collectionName);
    this.date_created = new DateTableValue(dateCreated);
  }
}
