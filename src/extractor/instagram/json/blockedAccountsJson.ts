import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { BlockedAccounts } from "../models/blockedAccounts.js";

class BlockedAccountsJson extends JsonExtractor {
  async process() {
    const blockedAccounts = this.query(
      `$.relationships_blocked_users[*].string_list_data[*]`
    );

    const processedBlockedAccounts = blockedAccounts.map(
      (blockedAccount) =>
        new BlockedAccounts(
          blockedAccount.value,
          blockedAccount.href,
          blockedAccount.timestamp
        )
    );

    this.table.rows.push(...processedBlockedAccounts);
  }
}

export const blockedAccountsJson = new BlockedAccountsJson(
  config.SERVICE_INSTAGRAM,
  ".*/blocked_accounts.json",
  "blocked_accounts"
);
