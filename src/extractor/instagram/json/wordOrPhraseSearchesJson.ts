import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { WordOrPhraseSearches } from "../models/wordOrPhraseSearches.js";

class WordOrPhraseSearchesJson extends JsonExtractor {
  async process() {
    const searches = this.query(`$.searches_keyword[*].string_map_data`);

    const processedSearches = searches.map(
      (searchEntry) =>
        new WordOrPhraseSearches(
          searchEntry.search?.value,
          searchEntry.time?.timestamp
        )
    );

    this.table.rows.push(...processedSearches);
  }
}

export const wordOrPhraseSearchesJson = new WordOrPhraseSearchesJson(
  config.SERVICE_INSTAGRAM,
  ".*/word_or_phrase_searches.json",
  "word_or_phrase_searches"
);
