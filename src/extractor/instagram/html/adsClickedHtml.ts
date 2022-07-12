import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { AdsClicked } from "../models/adsClicked.js";

class AdsClickedHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll('div[role="main"] .uiBoxWhite')
      .forEach((node) => {
        const adTitle = node.querySelectorAll("div")[0].textContent;
        const dateClicked = node.querySelectorAll("div")[1].textContent;
        this.table.rows.push(new AdsClicked(adTitle, dateClicked));
      });
  }
}

export const adsClickedHtml = new AdsClickedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/ads_clicked.html",
  "ads_clicked"
);
