import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourMusic extends FacebookBaseModel {
  action_title?: TextTableValue;

  action_date?: DateTableValue;

  attachments?: JsonTableValue;

  data?: JsonTableValue;

  constructor(
    actionTitle: string,
    actionDate: number,
    attachments: object,
    data: object
  ) {
    super();
    this.action_title = new TextTableValue(actionTitle);
    this.action_date = new DateTableValue(actionDate);
    this.attachments = new JsonTableValue(attachments);
    this.data = new JsonTableValue(data);
  }
}
