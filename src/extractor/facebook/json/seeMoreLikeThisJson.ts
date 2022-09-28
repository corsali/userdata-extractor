import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SeeMoreLikeThis } from "../models/seeMoreLikeThis.js";

class SeeMoreLikeThisJson extends JsonExtractor {
  async process() {
    const newsUrls = this.query(`$.news_see_more_urls_v2.*`);

    const processedNewsUrls = newsUrls.map(
      (newsUrl) => new SeeMoreLikeThis(newsUrl)
    );

    this.table.rows.push(...processedNewsUrls);
  }
}

export const seeMoreLikeThisJson = new SeeMoreLikeThisJson(
  config.SERVICE_FACEBOOK,
  ".*/see_more_like_this.json",
  "see_more_like_this"
);
