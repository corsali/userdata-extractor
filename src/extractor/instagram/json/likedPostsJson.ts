import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LikedPosts } from "../models/likedPosts.js";

class LikedPostsJson extends JsonExtractor {
  async process() {
    const posts = this.query(`$.likes_media_likes[*].string_list_data[*]`);

    const processedPosts = posts.map(
      (post) =>
        new LikedPosts({
          postUrl: post.href,
          action: post.value,
          dateLiked: post.timestamp,
        })
    );

    this.table.rows.push(...processedPosts);
  }
}

export const likedPostsJson = new LikedPostsJson(
  config.SERVICE_INSTAGRAM,
  ".*/liked_posts.json",
  "liked_posts"
);
