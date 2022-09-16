import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyViewedPostsAndArticles } from "../models/recentlyViewedPostsAndArticles.js";

class RecentlyViewedPostsAndArticlesJson extends JsonExtractor {
  async process() {
    const articles = this.query(
      `$.recently_viewed[?(@.name=='Articles')].entries.*`
    );

    articles.forEach((article) => {
      this.table.rows.push(
        new RecentlyViewedPostsAndArticles({
          postName: article.data?.name,
          postType: "article",
          datePosted: article.timestamp,
          postUri: article.data?.uri,
          shareLink: article.data?.share,
        })
      );
    });

    const posts = this.query(
      `$.recently_viewed[?(@.name=='Posts that have been shown to you in your Feed')].entries.*`
    );

    posts.forEach((article) => {
      this.table.rows.push(
        new RecentlyViewedPostsAndArticles({
          postName: article.data?.name,
          postType: "post",
          datePosted: article.timestamp,
          postUri: article.data?.uri,
          shareLink: article.data?.share,
        })
      );
    });
  }
}

export const recentlyViewedPostsAndArticlesJson =
  new RecentlyViewedPostsAndArticlesJson(
    config.SERVICE_FACEBOOK,
    ".*/recently_viewed.json",
    "recently_viewed_posts_and_articles"
  );
