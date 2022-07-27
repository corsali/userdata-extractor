import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class YourReelsTopics extends InstagramBaseModel {
  topic?: TextTableValue;

  constructor(topic: string) {
    super();
    this.topic = new TextTableValue(topic);
  }
}
