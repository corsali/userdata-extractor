import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourReelsSentiments } from "../models/yourReelsSentiments.js";

class YourReelsSentimentsJson extends JsonExtractor {
  async process() {
    const sentinmentData = this.query(
      `$.topics_your_reels_emotions[*].string_map_data["Name"].value`
    );

    const processedSentinmentData = sentinmentData.map(
      (topic: string) => new YourReelsSentiments(topic)
    );

    this.table.rows.push(...processedSentinmentData);
  }
}

export const yourReelsSentimentsJson = new YourReelsSentimentsJson(
  config.SERVICE_INSTAGRAM,
  "your_topics/your_reels_sentiments.json",
  "your_reels_sentinments"
);
