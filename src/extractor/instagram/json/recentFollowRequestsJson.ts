import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentFollowRequests } from "../models/recentFollowRequests.js";

class RecentFollowRequestsJson extends JsonExtractor {
  async process() {
    const recentFollowRequests = this.query(
      `$.relationships_permanent_follow_requests[*].string_list_data`
    );

    const processedRecentFollowRequests = recentFollowRequests.map(
      (followRequest) =>
        new RecentFollowRequests({
          name: followRequest[0]?.value,
          profileUrl: followRequest[0]?.href,
          dateFollowed: followRequest[0]?.timestamp,
        })
    );

    this.table.rows.push(...processedRecentFollowRequests);
  }
}

export const recentFollowRequestsJson = new RecentFollowRequestsJson(
  config.SERVICE_INSTAGRAM,
  ".*/recent_follow_requests.json",
  "recent_follow_requests"
);
