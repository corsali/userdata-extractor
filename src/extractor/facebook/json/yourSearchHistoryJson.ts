import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourSearchHistory } from "../models/yourSearchHistory.js";

class YourSearchHistoryJson extends JsonExtractor {
  async process() {
    const yourSearchHistory = this.query(`$.searches_v2.*`);

    const processedSearchHistory = yourSearchHistory.map(
      (search) => new YourSearchHistory(search.data?.[0].text, search.timestamp)
    );

    this.table.rows.push(...processedSearchHistory);
  }
}

export const yourSearchHistoryJson = new YourSearchHistoryJson(
  config.SERVICE_FACEBOOK,
  ".*/your_search_history.json",
  "your_search_history"
);
