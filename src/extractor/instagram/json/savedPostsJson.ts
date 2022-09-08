import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SavedPosts } from "../models/savedPosts.js";

class SavedPostsJson extends JsonExtractor {
  async process() {
    const savedPosts = this.query(
      `$.saved_saved_media[*].string_map_data["shared by"]`
    );

    const processedSavedPosts = savedPosts.map(
      (savedPost) =>
        new SavedPosts({
          postUrl: savedPost.href,
          postUsername: savedPost.value,
          dateSaved: savedPost.timestamp,
        })
    );

    this.table.rows.push(...processedSavedPosts);
  }
}

export const savedPostsJson = new SavedPostsJson(
  config.SERVICE_INSTAGRAM,
  ".*/saved_posts.json",
  "saved_posts"
);
