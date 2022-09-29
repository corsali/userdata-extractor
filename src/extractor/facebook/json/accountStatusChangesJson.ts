import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AccountStatusChanges } from "../models/accountStatusChanges.js";

class AccountStatusChangesJson extends JsonExtractor {
  async process() {
    const accountStatusChanges = this.query(`$.account_status_changes_v2.*`);

    const processedChanges = accountStatusChanges.map(
      (accountStatusChange) =>
        new AccountStatusChanges(
          accountStatusChange.status,
          accountStatusChange.timestamp
        )
    );

    this.table.rows.push(...processedChanges);
  }
}

export const accountStatusChangesJson = new AccountStatusChangesJson(
  config.SERVICE_FACEBOOK,
  ".*/account_status_changes.json",
  "account_status_changes"
);
