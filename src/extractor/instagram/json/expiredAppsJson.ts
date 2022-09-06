import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ExpiredApps } from "../models/expiredApps.js";

class ExpiredAppsJson extends JsonExtractor {
  async process() {
    const expiredApps = this.query(
      `$.apps_and_websites_expired_apps[*].string_map_data`
    );

    const processedExpiredApps = expiredApps.map(
      (expiredApp) =>
        new ExpiredApps(
          expiredApp["app name"]?.value,
          expiredApp["expired on"]?.timestamp,
          expiredApp["user id"]?.value
        )
    );

    this.table.rows.push(...processedExpiredApps);
  }
}

export const expiredAppsJson = new ExpiredAppsJson(
  config.SERVICE_INSTAGRAM,
  ".*/expired_pps.json",
  "expired_apps"
);
