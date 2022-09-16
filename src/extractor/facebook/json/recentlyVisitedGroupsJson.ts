import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyVisitedGroups } from "../models/recentlyVisitedGroups.js";

class RecentlyVisitedGroupsJson extends JsonExtractor {
  async process() {
    const visitedGroups = this.query(
      `$.visited_things_v2[?(@.name=='Groups visited')].entries.*`
    );

    const processedVisitedGroups = visitedGroups.map(
      (visitedGroup) =>
        new RecentlyVisitedGroups(
          visitedGroup.data?.name,
          visitedGroup.data?.uri,
          visitedGroup.timestamp
        )
    );

    this.table.rows.push(...processedVisitedGroups);
  }
}

export const recentlyVisitedGroupsJson = new RecentlyVisitedGroupsJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_visited.json",
  "recently_visited_groups"
);
