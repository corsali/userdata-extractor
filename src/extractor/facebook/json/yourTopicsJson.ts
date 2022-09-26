import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourTopics } from "../models/yourTopics.js";

class YourTopicsJson extends JsonExtractor {
  async process() {
    const yourTopics = this.query(`$.inferred_topics_v2.*`);

    const processedYourTopics = yourTopics.map(
      (topic) => new YourTopics(topic)
    );

    this.table.rows.push(...processedYourTopics);
  }
}

export const yourTopicsJson = new YourTopicsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_topics.json",
  "your_topics"
);
