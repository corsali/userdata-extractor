import { TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class YourReelsSentiments extends InstagramBaseModel {
  /**
   * Exists: JSON
   */
  sentiment?: TextTableValue;

  constructor(sentiment: string) {
    super();
    this.sentiment = new TextTableValue(sentiment);
  }
}
