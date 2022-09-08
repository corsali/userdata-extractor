import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PostsViewed } from "../models/postsViewed.js";

class PostsViewedJson extends JsonExtractor {
  async process() {
    const postsViewed = this.query(
      `$.impressions_history_posts_seen[*].string_map_data`
    );

    const processedPostsViewed = postsViewed.map(
      (postViewed) =>
        new PostsViewed(postViewed.author?.value, postViewed.time?.timestamp)
    );

    this.table.rows.push(...processedPostsViewed);
  }
}

export const postsViewedJson = new PostsViewedJson(
  config.SERVICE_INSTAGRAM,
  ".*/posts_viewed.json",
  "posts_viewed"
);
