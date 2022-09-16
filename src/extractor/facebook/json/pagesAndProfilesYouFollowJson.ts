import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PagesAndProfilesYouFollow } from "../models/pagesAndProfilesYouFollow.js";

class PagesAndProfilesYouFollowJson extends JsonExtractor {
  async process() {
    const pagesFollowed = this.query(`$.pages_followed_v2.*`);

    const processedPagesFollowed = pagesFollowed.map(
      (pageFollowed) =>
        new PagesAndProfilesYouFollow(
          pageFollowed.title,
          pageFollowed.timestamp
        )
    );

    this.table.rows.push(...processedPagesFollowed);
  }
}

export const pagesAndProfilesYouFollowJson = new PagesAndProfilesYouFollowJson(
  config.SERVICE_FACEBOOK,
  ".*/pages_and_profiles_you_follow.json",
  "pages_and_profiles_you_follow"
);
