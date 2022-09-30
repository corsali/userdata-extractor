import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourPosts } from "../models/yourPosts.js";

class YourPostsJson extends JsonExtractor {
  async process() {
    const yourPosts = this.query(`$.*`);

    const processedPosts = yourPosts.map(
      (yourPost) =>
        new YourPosts(
          yourPost.timestamp,
          yourPost.data?.find((entry) => "post" in entry)?.post,
          yourPost.attachments
        )
    );

    this.table.rows.push(...processedPosts);
  }
}

export const yourPostsJson = new YourPostsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_posts_1.json",
  "your_posts_1"
);
