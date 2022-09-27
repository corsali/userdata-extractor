import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourTopics extends FacebookBaseModel {
  topic?: TextTableValue;

  constructor(topic: string) {
    super();
    this.topic = new TextTableValue(topic);
  }
}
