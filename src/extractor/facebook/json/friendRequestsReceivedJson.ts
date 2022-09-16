import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FriendRequestsReceived } from "../models/friendRequestsReceived.js";

class FriendRequestsReceivedJson extends JsonExtractor {
  async process() {
    const friendRequests = this.query(`$.received_requests_v2.*`);

    const processedFriendRequests = friendRequests.map(
      (friend) => new FriendRequestsReceived(friend.name, friend.timestamp)
    );

    this.table.rows.push(...processedFriendRequests);
  }
}

export const friendRequestsReceivedJson = new FriendRequestsReceivedJson(
  config.SERVICE_FACEBOOK,
  "friends_and_followers/friend_requests_received.json",
  "friend_requests_received"
);
