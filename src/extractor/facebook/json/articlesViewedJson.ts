import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ArticlesViewed } from "../models/articlesViewed.js";

class ArticlesViewedJson extends JsonExtractor {
  async process() {
    const articlesViewed = this.query(`$.news_link_clicks_v2.*`);

    const processedArticlesViewed = articlesViewed.map(
      (articleViewed) =>
        new ArticlesViewed(articleViewed.url, articleViewed.timestamp)
    );

    this.table.rows.push(...processedArticlesViewed);
  }
}

export const articlesViewedJson = new ArticlesViewedJson(
  config.SERVICE_FACEBOOK,
  ".*/articles_viewed.json",
  "articles_viewed"
);
