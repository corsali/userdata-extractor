import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { TagSearches } from "../models/tagSearches.js";

class TagSearchesJson extends JsonExtractor {
  async process() {
    const tagSearches = this.query(`$.searches_hashtag[*].string_map_data`);

    const processedTagSearches = tagSearches.map(
      (tagSearch) =>
        new TagSearches(tagSearch.search.value, tagSearch.time.timestamp)
    );

    this.table.rows.push(...processedTagSearches);
  }
}

export const tagSearchesJson = new TagSearchesJson(
  config.SERVICE_INSTAGRAM,
  ".*/tag_searches.json",
  "tag_searches"
);
