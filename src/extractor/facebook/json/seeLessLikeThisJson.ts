import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SeeLessLikeThis } from "../models/seeLessLikeThis.js";

class SeeLessLikeThisJson extends JsonExtractor {
  async process() {
    const newsUrls = this.query(`$.news_see_less_urls_v2.*`);

    const processedNewsUrls = newsUrls.map(
      (newsUrl) => new SeeLessLikeThis(newsUrl)
    );

    this.table.rows.push(...processedNewsUrls);
  }
}

export const seeLessLikeThisJson = new SeeLessLikeThisJson(
  config.SERVICE_FACEBOOK,
  ".*/see_less_like_this.json",
  "see_less_like_this"
);
