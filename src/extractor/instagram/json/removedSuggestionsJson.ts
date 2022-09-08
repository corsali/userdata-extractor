import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RemovedSuggestions } from "../models/removedSuggestions.js";

class RemovedSuggestionsJson extends JsonExtractor {
  async process() {
    const removedSuggestions = this.query(
      `$.relationships_dismissed_suggested_users[*].string_list_data[*]`
    );

    const processedRemovedSuggestions = removedSuggestions.map(
      (removedSuggestion) =>
        new RemovedSuggestions(
          removedSuggestion.value,
          removedSuggestion.href,
          removedSuggestion.timestamp
        )
    );

    this.table.rows.push(...processedRemovedSuggestions);
  }
}

export const removedSuggestionsJson = new RemovedSuggestionsJson(
  config.SERVICE_INSTAGRAM,
  ".*/removed_suggestions.json",
  "removed_suggestions"
);
