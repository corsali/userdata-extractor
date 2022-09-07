import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PagesYouHaveLiked } from "../models/pagesYouHaveLiked.js";

class PagesYouHaveLikedJson extends JsonExtractor {
  async process() {
    const pagesYouLiked = this.query(`$.page_likes_v2.*`);

    const processedPagesYouLiked = pagesYouLiked.map(
      (pageLiked) => new PagesYouHaveLiked(pageLiked.name, pageLiked.timestamp)
    );

    this.table.rows.push(...processedPagesYouLiked);
  }
}

export const pagesYouHaveLikedJson = new PagesYouHaveLikedJson(
  config.SERVICE_FACEBOOK,
  ".*/pages_you've_liked.json",
  "pages_you_have_liked"
);
