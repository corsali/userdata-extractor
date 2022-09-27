import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PostsFromAppsAndWebsites } from "../models/postsFromAppsAndWebsites.js";

class PostsFromAppsAndWebsitesJson extends JsonExtractor {
  async process() {
    const appsAndWebsitesPosts = this.query(`$.app_posts_v2.*`);

    const processedPosts = appsAndWebsitesPosts.map(
      (post) =>
        new PostsFromAppsAndWebsites(
          post.timestamp,
          post.title,
          post.attachments
        )
    );

    this.table.rows.push(...processedPosts);
  }
}

export const postsFromAppsAndWebsitesJson = new PostsFromAppsAndWebsitesJson(
  config.SERVICE_FACEBOOK,
  ".*/posts_from_apps_and_websites.json",
  "posts_from_apps_and_websites"
);
