import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LoginsAndLogouts } from "../models/loginsAndLogouts.js";

class LoginsAndLogoutsJson extends JsonExtractor {
  async process() {
    const loginAndLogoutActivity = this.query(`$.account_accesses_v2.*`);

    const processedLoginAndLogoutActivity = loginAndLogoutActivity.map(
      (loginOrLogoutAction) =>
        new LoginsAndLogouts({
          action: loginOrLogoutAction.action,
          dateActivityOccurred: loginOrLogoutAction.timestamp,
          ipAddress: loginOrLogoutAction.ip_address,
          siteName: loginOrLogoutAction.site,
        })
    );

    this.table.rows.push(...processedLoginAndLogoutActivity);
  }
}

export const loginsAndLogoutsJson = new LoginsAndLogoutsJson(
  config.SERVICE_FACEBOOK,
  ".*/logins_and_logouts.json",
  "logins_and_logouts"
);
