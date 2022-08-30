import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourReelsTopics } from "../models/yourReelsTopics.js";

class YourReelsTopicsJson extends JsonExtractor {
  async process() {
    const topicData = this.query(
      `$.topics_your_reels_topics[*].string_map_data["name"].value`
    );

    const processedTopicData = topicData.map(
      (topic: string) => new YourReelsTopics(topic)
    );

    this.table.rows.push(...processedTopicData);
  }
}

export const yourReelsTopicsJson = new YourReelsTopicsJson(
  config.SERVICE_INSTAGRAM,
  ".*/your_reels_topics.json",
  "your_reels_topics"
);
