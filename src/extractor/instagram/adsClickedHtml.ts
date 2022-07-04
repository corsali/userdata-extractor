import config from "../../config/index.js";
import { ColumnType, toDate } from "../../query/table.js";
import { HtmlExtractor } from "../htmlExtractor.js";

class AdsClickedHtml extends HtmlExtractor {
  async process() {
    this.table = {
      tableName: "ads_clicked",
      columns: [],
      rows: [{ values: [] }],
    };

    this.htmlDocument
      .querySelectorAll('div[role="main"] .uiBoxWhite')
      .forEach((node, index) => {
        const adTitle = node.querySelectorAll("div")[0].textContent;
        const dateClicked = node.querySelectorAll("div")[1].textContent;

        this.table.columns = [
          {
            name: "ad_title",
            type: ColumnType.text,
          },
          {
            name: "date_clicked",
            type: ColumnType.date,
          },
        ];
        this.table.rows[index] = {
          values: [adTitle, toDate(dateClicked)],
        };
      });
  }
}

export const adsClickedHtml = new AdsClickedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/ads_clicked.html"
);
