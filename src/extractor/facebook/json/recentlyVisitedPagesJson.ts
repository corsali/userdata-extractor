import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyVisitedPages } from "../models/recentlyVisitedPages.js";

class RecentlyVisitedProfilesJson extends JsonExtractor {
  async process() {
    const visitedPages = this.query(
      `$.visited_things_v2[?(@.name=='Page visits')].entries.*`
    );

    const processedVisitedPages = visitedPages.map(
      (visitedPage) =>
        new RecentlyVisitedPages(
          visitedPage.data?.name,
          visitedPage.data?.uri,
          visitedPage.timestamp
        )
    );

    this.table.rows.push(...processedVisitedPages);
  }
}

export const recentlyVisitedPagesJson = new RecentlyVisitedProfilesJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_visited.json",
  "recently_visited_pages"
);
