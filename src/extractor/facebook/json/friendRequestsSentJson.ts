import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FriendRequestsSent } from "../models/friendRequestsSent.js";

class FriendRequestsSentJson extends JsonExtractor {
  async process() {
    const friendRequests = this.query(`$.sent_requests_v2.*`);

    const processedFriendRequests = friendRequests.map(
      (friend) => new FriendRequestsSent(friend.name, friend.timestamp)
    );

    this.table.rows.push(...processedFriendRequests);
  }
}

export const friendRequestsSentJson = new FriendRequestsSentJson(
  config.SERVICE_FACEBOOK,
  "friends_and_followers/friend_requests_sent.json",
  "friend_requests_sent"
);
