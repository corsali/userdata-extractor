import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PagesYouFollow } from "../models/pagesYouFollow.js";

class PagesYouFollowJson extends JsonExtractor {
  async process() {
    const followedPages = this.query(`$.pages_followed_v2.*`);

    const processedFollowedPages = followedPages.map(
      (followedPage) =>
        new PagesYouFollow(followedPage.title, followedPage.timestamp)
    );

    this.table.rows.push(...processedFollowedPages);
  }
}

export const pagesYouFollowJson = new PagesYouFollowJson(
  config.SERVICE_FACEBOOK,
  ".*/pages_you_follow.json",
  "pages_you_follow"
);
