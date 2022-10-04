import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ArchivedPosts } from "../models/archivedPosts.js";

class ArchivedPostsJson extends JsonExtractor {
  async process() {
    const archivedPosts = this.query(`$.ig_archived_post_media.*`);

    const processedArchivedPosts = archivedPosts.map(
      (archivedPost) =>
        // Post either has a single media entry which contains the title or it
        // contains multiple items and the title is attached to the post.
        new ArchivedPosts(
          archivedPost.title ?? archivedPost.media?.[0]?.title,
          archivedPost.creation_timestamp ??
            archivedPost.media?.[0]?.creation_timestamp,
          archivedPost.media
        )
    );

    this.table.rows.push(...processedArchivedPosts);
  }
}

export const archivedPostsJson = new ArchivedPostsJson(
  config.SERVICE_INSTAGRAM,
  ".*/archived_posts.json",
  "archived_posts"
);
