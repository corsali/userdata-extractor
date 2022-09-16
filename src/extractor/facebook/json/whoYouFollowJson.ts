import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { WhoYouFollow } from "../models/whoYouFollow.js";

class WhoYouFollowJson extends JsonExtractor {
  async process() {
    const followedFriends = this.query(`$.following_v2.*`);

    const processedFollowedFriends = followedFriends.map(
      (followedFriend) =>
        new WhoYouFollow(followedFriend.name, followedFriend.timestamp)
    );

    this.table.rows.push(...processedFollowedFriends);
  }
}

export const whoYouFollowJson = new WhoYouFollowJson(
  config.SERVICE_FACEBOOK,
  "friends_and_followers/who_you_follow.json",
  "who_you_follow"
);
