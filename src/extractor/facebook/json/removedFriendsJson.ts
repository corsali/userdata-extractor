import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RemovedFriends } from "../models/removedFriends.js";

class RemovedFriendsJson extends JsonExtractor {
  async process() {
    const removedFriends = this.query(`$.deleted_friends_v2.*`);

    const processedRemovedFriends = removedFriends.map(
      (removedFriend) =>
        new RemovedFriends(removedFriend.name, removedFriend.timestamp)
    );

    this.table.rows.push(...processedRemovedFriends);
  }
}

export const removedFriendsJson = new RemovedFriendsJson(
  config.SERVICE_FACEBOOK,
  "friends_and_followers/removed_friends.json",
  "removed_friends"
);
