import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FollowersAndFollowing as Following } from "../models/followersAndFollowing.js";

class FollowingJson extends JsonExtractor {
  async process() {
    const following = this.query(`$.relationships_following[*].string_list_data`) ?? [];

    const processedFollowing = following.map(
      (singleFollowing) =>
        new Following({
          name: singleFollowing[0].value,
          url: singleFollowing[0].href,
          timestamp: singleFollowing[0].timestamp,
        })
    );

    this.table.rows.push(...processedFollowing);
  }
}

export const followingJson = new FollowingJson(
  config.SERVICE_INSTAGRAM,
  ".*/following.json",
  "following"
);
