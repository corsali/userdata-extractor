import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Feed } from "../models/feed.js";

class FeedJson extends JsonExtractor {
  async process() {
    const feedsByCategory = this.query(`$.people_and_friends_v2.*`);

    feedsByCategory.forEach((feedCategory) => {
      feedCategory?.entries?.forEach((feed: any) => {
        this.table.rows.push(
          new Feed({
            category: feedCategory.name,
            categoryDescription: feedCategory.description,
            actionDate: feed?.timestamp,
            feedName: feed?.data?.name,
            feedUrl: feed?.data?.uri,
          })
        );
      });
    });
  }
}

export const feedsJson = new FeedJson(
  config.SERVICE_FACEBOOK,
  ".*/feed.json",
  "feed"
);
