import config from "../../../config/index.js";
import { ColumnType, toDate } from "../../../query/table.js";
import { HtmlExtractor } from "../../htmlExtractor.js";

class AdsViewedHtml extends HtmlExtractor {
  async process() {
    this.table.addColumn("ad_author");
    this.table.addColumn("date_viewed", ColumnType.date);

    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node, index) => {
        const adAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;
        this.table.rows[index] = {
          values: [adAuthor, toDate(dateViewed)],
        };
      });
  }
}

export const adsViewedHtml = new AdsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/ads_viewed.html",
  "ads_viewed"
);
