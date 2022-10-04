import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { GroupYourPendingPosts } from "../models/groupYourPendingPosts.js";

class GroupYourPendingPostsJson extends JsonExtractor {
  async process() {
    const pendingPosts = this.query(`$.pending_posts_v2.*`);

    pendingPosts.forEach((pendingPost) => {
      pendingPost?.data?.forEach((postData: any) => {
        this.table.rows.push(
          new GroupYourPendingPosts(postData?.post, pendingPost.timestamp)
        );
      });
    });
  }
}

export const groupYourPendingPostsJson = new GroupYourPendingPostsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_pending_posts_in_groups.json",
  "your_pending_posts_in_groups"
);
