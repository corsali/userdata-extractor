import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourPostsInGroups } from "../models/yourPostsInGroups.js";

class YourPostsInGroupsJson extends JsonExtractor {
  async process() {
    const postsInGroups = this.query(`$.group_posts_v2.*`);

    const processedPostsInGroups = postsInGroups.map(
      (postInGroup) =>
        new YourPostsInGroups({
          title: postInGroup.title,
          datePosted: postInGroup.timestamp,
          attachments: postInGroup.attachments,
          post: postInGroup.data?.[0]?.post,
          data: postInGroup.data,
          tags: postInGroup.tags?.map?.((tag) => tag?.name)?.join(";"),
        })
    );

    this.table.rows.push(...processedPostsInGroups);
  }
}

export const yourPostsInGroupsJson = new YourPostsInGroupsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_posts_in_groups.json",
  "your_posts_in_groups"
);
