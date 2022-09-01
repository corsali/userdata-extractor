import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LinkedMetaAccounts } from "../models/linkedMetaAccounts.js";

class LinkedMetaAccountsJson extends JsonExtractor {
  async process() {
    const linkedAccounts = this.query(`$.profile_linked_meta_accounts[*]`);

    const processedLinkedAccounts = linkedAccounts.map((linkedAccount) => {
      const linkedAccountMap = linkedAccount.string_map_data;
      return new LinkedMetaAccounts({
        accountType: linkedAccountMap["account type"].value,
        username: linkedAccountMap["user name"].value,
        identifier: linkedAccountMap.identifier.value,
        email: linkedAccountMap["email address"].value,
        phone: linkedAccountMap["phone number"].value,
      });
    });

    this.table.rows.push(...processedLinkedAccounts);
  }
}

export const linkedMetaAccountsJson = new LinkedMetaAccountsJson(
  config.SERVICE_INSTAGRAM,
  ".*/linked_meta_accounts.json",
  "linked_meta_accounts"
);
