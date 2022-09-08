import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AudienceInsights } from "../models/audienceInsights";

class AudienceInsightsJson extends JsonExtractor {
  async process() {
    const audienceInsights = this.query(
      `$.organic_insights_audience[*].string_map_data`
    );

    const processedAudienceInsights = audienceInsights.map(
      (audienceInsightsEntry) => {
        // @todo Need more data and see examples with year provided to have
        // reliable parsing to Date. The relevant parser can be included in
        // DateTableValue object parsing.
        const dateRange =
          audienceInsightsEntry["date range"]?.value?.split(" - ");

        return new AudienceInsights(
          dateRange?.[0],
          dateRange?.[1],
          audienceInsightsEntry.followers?.value
        );
      }
    );

    this.table.rows.push(...processedAudienceInsights);
  }
}

export const audienceInsightsJson = new AudienceInsightsJson(
  config.SERVICE_INSTAGRAM,
  ".*/audience_insights.json",
  "audience_insights"
);
