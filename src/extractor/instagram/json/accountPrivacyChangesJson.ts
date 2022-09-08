import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AccountPrivacyChanges } from "../models/accountPrivacyChanges";

class AccountPrivacyChangesJson extends JsonExtractor {
  async process() {
    const accountPrivacyChanges = this.query(
      `$.account_history_account_privacy_history[*]`
    );

    const processedAccountPrivacyChanges = accountPrivacyChanges.map(
      (privacyChange) =>
        new AccountPrivacyChanges(
          privacyChange.title,
          privacyChange.string_map_data?.time?.timestamp
        )
    );

    this.table.rows.push(...processedAccountPrivacyChanges);
  }
}

export const accountPrivacyChangesJson = new AccountPrivacyChangesJson(
  config.SERVICE_INSTAGRAM,
  ".*/account_privacy_changes.json",
  "account_privacy_changes"
);
