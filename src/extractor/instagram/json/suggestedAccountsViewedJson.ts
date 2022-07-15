import config from "../../../config";
import { JsonExtractor } from "../../jsonExtractor";
import { SuggestedAccountsViewed } from "../models/suggestedAccountsViewed";

class SuggestedAccountsViewedJson extends JsonExtractor {
  async process() {
    const values = this.query(
      "$.impressions_history_chaining_seen[*].string_map_data"
    );

    values.forEach((value) => {
      const accountSuggested = value.Username.value;
      const dateSuggested = value.Time.timestamp;
      this.table.rows.push(
        new SuggestedAccountsViewed(accountSuggested, dateSuggested)
      );
    });
  }
}

export const suggestedAccountsViewedJson = new SuggestedAccountsViewedJson(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/suggested_accounts_viewed.json",
  "suggested_accounts_viewed"
);
