import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Followers } from "../models/followers.js";

class FollowersJson extends JsonExtractor {
  async process() {
    const followers = this.query(
      `$.relationships_followers[*].string_list_data`
    );

    const processedFollowers = followers.map(
      (follower) =>
        new Followers({
          name: follower[0].value,
          profileUrl: follower[0].href,
          dateFollowed: follower[0].timestamp,
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
