import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { SuggestedAccountsViewed } from "../models/suggestedAccountsViewed.js";

class SuggestedAccountsViewedHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node) => {
        const accountSuggested = node.querySelectorAll("td")[1].textContent;
        const dateSuggested = node.querySelectorAll("td")[3].textContent;
        this.table.rows.push(
          new SuggestedAccountsViewed(accountSuggested, dateSuggested)
        );
      });
  }
}

export const suggestedAccountsViewedHtml = new SuggestedAccountsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/suggested_accounts_viewed.html",
  "suggested_accounts_viewed"
);
