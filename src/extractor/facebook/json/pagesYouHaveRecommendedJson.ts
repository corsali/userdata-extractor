import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PagesYouHaveRecommended } from "../models/pagesYouHaveRecommended.js";

class PagesYouHaveRecommendedJson extends JsonExtractor {
  async process() {
    const recommendedPages = this.query(`$.recommended_pages_v2.*`);

    const processedRecommendedPages = recommendedPages.map(
      (recommendedPage) =>
        new PagesYouHaveRecommended(
          recommendedPage.name,
          recommendedPage.timestamp,
          recommendedPage.url
        )
    );

    this.table.rows.push(...processedRecommendedPages);
  }
}

export const pagesYouHaveRecommendedJson = new PagesYouHaveRecommendedJson(
  config.SERVICE_FACEBOOK,
  ".*/pages_you've_recommended.json",
  "pages_you_have_recommended"
);
