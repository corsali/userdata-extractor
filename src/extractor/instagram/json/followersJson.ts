import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FollowersAndFollowing as Followers } from "../models/followersAndFollowing.js";

class FollowersJson extends JsonExtractor {
  async process() {
    const followers = this.query(`$.relationships_followers[*].string_list_data`) ?? [];

    const processedFollowers = followers.map(
      (follower) =>
        new Followers({
          name: follower[0].value,
          url: follower[0].href,
          timestamp: follower[0].timestamp,
        })
    );

    this.table.rows.push(...processedFollowers);
  }
}

export const followersJson = new FollowersJson(
  config.SERVICE_INSTAGRAM,
  ".*/followers.json",
  "followers"
);
