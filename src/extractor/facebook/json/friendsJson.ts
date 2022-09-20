import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Friends } from "../models/friends.js";

class FriendsJson extends JsonExtractor {
  async process() {
    const friends = this.query(`$.friends_v2.*`);

    const processedFriends = friends.map(
      (friend) => new Friends(friend.name, friend.timestamp)
    );

    this.table.rows.push(...processedFriends);
  }
}

export const friendsJson = new FriendsJson(
  config.SERVICE_FACEBOOK,
  "friends_and_followers/friends.json",
  "friends"
);
