import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FollowingHashtags } from "../models/followingHashtags.js";

class FollowingHashtagsJson extends JsonExtractor {
  async process() {
    const followingHashtags = this.query(
      `$.relationships_following_hashtags[*].string_list_data`
    );

    const processedFollowingHashtags = followingHashtags.map(
      (followingHashtag) =>
        new FollowingHashtags({
          hashtag: followingHashtag[0].value,
          hashtagUrl: followingHashtag[0].href,
          dateFollowed: followingHashtag[0].timestamp,
        })
    );

    this.table.rows.push(...processedFollowingHashtags);
  }
}

export const followingHashtagsJson = new FollowingHashtagsJson(
  config.SERVICE_INSTAGRAM,
  ".*/following_hashtags.json",
  "following_hashtags"
);
