import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AccountActivity } from "../models/accountActivity.js";

class AccountActivityJson extends JsonExtractor {
  async process() {
    const accountActivity = this.query(`$.account_activity_v2.*`);

    const processedAccountActivity = accountActivity.map(
      (activity) =>
        new AccountActivity({
          action: activity.action,
          dateActivityOccurred: activity.timestamp,
          ipAddress: activity.ip_address,
          userAgent: activity.user_agent,
          cookie: activity.datr_cookie,
          city: activity.city,
          region: activity.region,
          country: activity.country,
          siteName: activity.site_name,
        })
    );

    this.table.rows.push(...processedAccountActivity);
  }
}

export const accountActivityJson = new AccountActivityJson(
  config.SERVICE_FACEBOOK,
  ".*/account_activity.json",
  "account_activity"
);
