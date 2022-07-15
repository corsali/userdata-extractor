import config from "../../../config";
import { JsonExtractor } from "../../jsonExtractor";
import { YourReelsTopics } from "../models/yourReelsTopics";

class YourReelsTopicsJson extends JsonExtractor {
  async process() {
    const topicData = this.query(
      `$.topics_your_reels_topics[*].string_map_data["Name"].value`
    );

    const processedTopicData = topicData.map(
      (topic: string) => new YourReelsTopics(topic)
    );

    this.table.rows.push(...processedTopicData);
  }
}

export const yourReelsTopicsJson = new YourReelsTopicsJson(
  config.SERVICE_INSTAGRAM,
  "your_topics/your_reels_topics.json",
  "ad_interests"
);
