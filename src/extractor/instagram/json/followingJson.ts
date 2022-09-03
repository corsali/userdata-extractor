import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Following } from "../models/following.js";

class FollowingJson extends JsonExtractor {
  async process() {
    const following = this.query(
      `$.relationships_following[*].string_list_data`
    );

    const processedFollowing = following.map(
      (singleFollowing) =>
        new Following({
          name: singleFollowing[0].value,
          profileUrl: singleFollowing[0].href,
          dateFollowed: singleFollowing[0].timestamp,
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
