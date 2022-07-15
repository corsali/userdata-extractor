import { TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class YourReelsTopics extends InstagramBaseModel {
  /**
   * Exists: JSON
   */
  topic?: TextTableValue;

  constructor(topic: string) {
    super();
    this.topic = new TextTableValue(topic);
  }
}
