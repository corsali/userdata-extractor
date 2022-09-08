import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyUnfollowedAccounts } from "../models/recentlyUnfollowedAccounts.js";

class RecentlyUnfollowedAccountsJson extends JsonExtractor {
  async process() {
    const recentlyUnfollowedAccounts = this.query(
      `$.relationships_unfollowed_users[*].string_list_data`
    );

    const processedUnfollowedAccounts = recentlyUnfollowedAccounts.map(
      (unfollowedAccount) =>
        new RecentlyUnfollowedAccounts({
          name: unfollowedAccount[0]?.value,
          profileUrl: unfollowedAccount[0]?.href,
          dateFollowed: unfollowedAccount[0]?.timestamp,
        })
    );

    this.table.rows.push(...processedUnfollowedAccounts);
  }
}

export const recentlyUnfollowedAccountsJson =
  new RecentlyUnfollowedAccountsJson(
    config.SERVICE_INSTAGRAM,
    ".*/recently_unfollowed_accounts.json",
    "recently_unfollowed_accounts"
  );
