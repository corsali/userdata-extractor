import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { TimeSpent } from "../models/timeSpent.js";

class TimeSpentJson extends JsonExtractor {
  async process() {
    const timeSpentEvents = this.query(`$.news_time_spent_v2.*`);

    const processedTimeSpentEvents = timeSpentEvents.map(
      (event) =>
        new TimeSpent({
          eventDate: event.timestamp,
          eventType: event.event_type,
          postId: event.post_id,
          mediaId: event.media_id,
          eventUrl: event.url,
          webViewDuration: event.web_view_duration,
        })
    );

    this.table.rows.push(...processedTimeSpentEvents);
  }
}

export const timeSpentJson = new TimeSpentJson(
  config.SERVICE_FACEBOOK,
  ".*/time_spent.json",
  "time_spent"
);
