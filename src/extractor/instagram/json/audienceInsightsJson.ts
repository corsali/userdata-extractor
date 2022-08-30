import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AudienceInsights } from "../models/audienceInsights";

class AudienceInsightsJson extends JsonExtractor {
  async process() {
    const audienceInsights = this.query(
      `$.organic_insights_audience[*].string_map_data`
    );

    const processedAudienceInsights = audienceInsights.map(
      (audienceInsightsEntry) =>
        new AudienceInsights(
          audienceInsightsEntry["date range"].value,
          audienceInsightsEntry.followers.value
        )
    );

    this.table.rows.push(...processedAudienceInsights);
  }
}

export const audienceInsightsJson = new AudienceInsightsJson(
  config.SERVICE_INSTAGRAM,
  ".*/audience_insights.json",
  "audience_insights"
);
