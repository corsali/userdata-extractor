import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ContentInteractions } from "../models/contentInteractions.js";

class ContentInteractionsJson extends JsonExtractor {
  async process() {
    const contentInteractions = this.query(
      `$.organic_insights_interactions[*].string_map_data`
    );

    const processedContentInteractions = contentInteractions.map(
      (contentInteractionsEntry) => {
        // @todo Need more data and see examples with year provided to have
        // reliable parsing to Date. The relevant parser can be included in
        // DateTableValue object parsing.
        const dateRange =
          contentInteractionsEntry["date range"]?.value?.split(" - ");

        return new ContentInteractions({
          dateRangeFrom: dateRange?.[0],
          dateRangeTo: dateRange?.[1],
          contentInteractions:
            contentInteractionsEntry["content interactions"]?.value,
          contentInteractionsDelta:
            contentInteractionsEntry["content interactions delta"]?.value,
          postInteractions:
            contentInteractionsEntry["post interactions"]?.value,
          postInteractionsDelta:
            contentInteractionsEntry["post interactions delta"]?.value,
          storyInteractions:
            contentInteractionsEntry["story interactions"]?.value,
          storyInteractionsDelta:
            contentInteractionsEntry["story interactions delta"]?.value,
          videoInteractions:
            contentInteractionsEntry["video interactions"]?.value,
          videoInteractionsDelta:
            contentInteractionsEntry["video interactions delta"]?.value,
          liveVideoInteractions:
            contentInteractionsEntry["live video interactions"]?.value,
          liveVideoInteractionsDelta:
            contentInteractionsEntry["live video interactions delta"]?.value,
          accountsEngaged: contentInteractionsEntry["accounts engaged"]?.value,
          accountsEngagedDelta:
            contentInteractionsEntry["accounts engaged delta"]?.value,
        });
      }
    );

    this.table.rows.push(...processedContentInteractions);
  }
}

export const contentInteractionsJson = new ContentInteractionsJson(
  config.SERVICE_INSTAGRAM,
  ".*/content_interactions.json",
  "content_interactions"
);
