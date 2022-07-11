import config from "../../../config/index.js";
import { ColumnType, toDate } from "../../../query/table.js";
import { HtmlExtractor } from "../../htmlExtractor.js";

class AdsClickedHtml extends HtmlExtractor {
  async process() {
    this.table.addColumn("ad_title");
    this.table.addColumn("date_clicked", ColumnType.date);

    this.htmlDocument
      .querySelectorAll('div[role="main"] .uiBoxWhite')
      .forEach((node, index) => {
        const adTitle = node.querySelectorAll("div")[0].textContent;
        const dateClicked = node.querySelectorAll("div")[1].textContent;
        this.table.rows[index] = {
          values: [adTitle, toDate(dateClicked)],
        };
      });
  }
}

export const adsClickedHtml = new AdsClickedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/ads_clicked.html",
  "ads_clicked"
);
