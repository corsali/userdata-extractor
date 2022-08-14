import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Stories } from "../models/stories.js";

class StoriesJson extends JsonExtractor {
  async process() {
    const values = this.query("$.ig_stories[*]");

    values.forEach((value) => {
      this.table.rows.push(
        new Stories(value.uri, value.creation_timestamp, value.title)
      );
    });
  }
}

export const storiesJson = new StoriesJson(
  config.SERVICE_INSTAGRAM,
  ".*/stories.json",
  "stories"
);
