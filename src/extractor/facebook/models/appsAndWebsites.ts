import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AppsAndWebsites extends FacebookBaseModel {
  name?: TextTableValue;

  date_added?: DateTableValue;

  user_app_scoped_id?: TextTableValue;

  category?: TextTableValue;

  date_removed?: DateTableValue;

  constructor(values: {
    name: string;
    dateAdded: number;
    userAppScopedId: string;
    category: string;
    dateRemoved: number;
  }) {
    super();
    this.name = new TextTableValue(values.name);
    this.date_added = new DateTableValue(values.dateAdded);
    this.user_app_scoped_id = new TextTableValue(values.userAppScopedId);
    this.category = new TextTableValue(values.category);
    this.date_removed = new DateTableValue(values.dateRemoved);
  }
}
