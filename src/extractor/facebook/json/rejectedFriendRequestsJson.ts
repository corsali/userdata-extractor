import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RejectedFriendRequests } from "../models/rejectedFriendRequests.js";

class RejectedFriendRequestsJson extends JsonExtractor {
  async process() {
    const rejectedRequests = this.query(`$.rejected_requests_v2.*`);

    const processedRejectedRequests = rejectedRequests.map(
      (rejectedRequest) =>
        new RejectedFriendRequests(
          rejectedRequest.name,
          rejectedRequest.timestamp
        )
    );

    this.table.rows.push(...processedRejectedRequests);
  }
}

export const rejectedFriendRequestsJson = new RejectedFriendRequestsJson(
  config.SERVICE_FACEBOOK,
  "friends_and_followers/rejected_friend_requests.json",
  "rejected_friend_requests"
);
