import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourPages } from "../models/yourPages.js";

class YourPagesJson extends JsonExtractor {
  async process() {
    const yourPages = this.query(`$.pages_v2.*`);

    const processedPages = yourPages.map(
      (page) => new YourPages(page.name, page.timestamp, page.url)
    );

    this.table.rows.push(...processedPages);
  }
}

export const yourPagesJson = new YourPagesJson(
  config.SERVICE_FACEBOOK,
  ".*/your_pages.json",
  "your_pages"
);
