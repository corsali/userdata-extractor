import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourSavedItems extends FacebookBaseModel {
  item_title?: TextTableValue;

  date_saved?: DateTableValue;

  ext_data_name?: TextTableValue;

  ext_data_url?: UrlTableValue;

  ext_data_source?: UrlTableValue;

  constructor(values: {
    itemTitle: string;
    dateSaved: number;
    extDataName: string;
    extDataUrl: string;
    extDataSource: string;
  }) {
    super();
    this.item_title = new TextTableValue(values.itemTitle);
    this.date_saved = new DateTableValue(values.dateSaved);
    this.ext_data_name = new TextTableValue(values.extDataName);
    this.ext_data_url = new UrlTableValue(values.extDataUrl);
    this.ext_data_source = new TextTableValue(values.extDataSource);
  }
}
