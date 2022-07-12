import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { AdsViewed } from "../models/adsViewed.js";

class AdsViewedHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node) => {
        const adAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;
        this.table.rows.push(new AdsViewed(adAuthor, dateViewed));
      });
  }
}

export const adsViewedHtml = new AdsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/ads_viewed.html",
  "ads_viewed"
);
