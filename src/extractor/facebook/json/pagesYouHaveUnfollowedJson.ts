import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PagesYouHaveUnfollowed } from "../models/pagesYouHaveUnfollowed.js";

class PagesYouHaveUnfollowedJson extends JsonExtractor {
  async process() {
    const unfollowedPages = this.query(`$.pages_unfollowed_v2.*`);

    const processedUnfollowedPages = unfollowedPages.map(
      (unfollowedPage) =>
        new PagesYouHaveUnfollowed(
          unfollowedPage.title,
          unfollowedPage.timestamp
        )
    );

    this.table.rows.push(...processedUnfollowedPages);
  }
}

export const pagesYouHaveUnfollowedJson = new PagesYouHaveUnfollowedJson(
  config.SERVICE_FACEBOOK,
  ".*/pages_you've_unfollowed.json",
  "pages_you_have_unfollowed"
);
