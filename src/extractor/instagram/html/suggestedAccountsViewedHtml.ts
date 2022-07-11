import config from "../../../config/index.js";
import { ColumnType, toDate } from "../../../query/table.js";
import { HtmlExtractor } from "../../htmlExtractor.js";

class SuggestedAccountsViewedHtml extends HtmlExtractor {
  async process() {
    this.table.addColumn("account_suggested");
    this.table.addColumn("date_suggested", ColumnType.date);

    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node, index) => {
        const accountSuggested = node.querySelectorAll("td")[1].textContent;
        const dateSuggested = node.querySelectorAll("td")[3].textContent;
        this.table.rows[index] = {
          values: [accountSuggested, toDate(dateSuggested)],
        };
      });
  }
}

export const suggestedAccountsViewedHtml = new SuggestedAccountsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/suggested_accounts_viewed.html",
  "suggested_accounts_viewed"
);
