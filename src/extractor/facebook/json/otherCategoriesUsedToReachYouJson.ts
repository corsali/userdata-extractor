import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { OtherCategoriesUsedToReachYou as OtherCategories } from "../models/otherCategoriesUsedToReachYou.js";

class OtherCategoriesUsedToReachYouJson extends JsonExtractor {
  async process() {
    const otherCategories = this.query(`$.bcts.*`);

    const processedOtherCategories = otherCategories.map(
      (category) => new OtherCategories(category)
    );

    this.table.rows.push(...processedOtherCategories);
  }
}

export const otherCategoriesUsedToReachYouJson =
  new OtherCategoriesUsedToReachYouJson(
    config.SERVICE_FACEBOOK,
    ".*/other_categories_used_to_reach_you.json",
    "other_categories_used_to_reach_you"
  );
