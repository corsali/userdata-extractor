import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyVisitedEvents } from "../models/recentlyVisitedEvents.js";

class RecentlyVisitedEventsJson extends JsonExtractor {
  async process() {
    const visitedEvents = this.query(
      `$.visited_things_v2[?(@.name=='Events visited')].entries.*`
    );

    const processedVisitedEvents = visitedEvents.map(
      (visitedEvent) =>
        new RecentlyVisitedEvents(
          visitedEvent.data?.name,
          visitedEvent.data?.uri,
          visitedEvent.timestamp
        )
    );

    this.table.rows.push(...processedVisitedEvents);
  }
}

export const recentlyVisitedEventsJson = new RecentlyVisitedEventsJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_visited.json",
  "recently_visited_events"
);
