import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourApps } from "../models/yourApps.js";

class YourAppsJson extends JsonExtractor {
  async process() {
    const yourApps = this.query(`$.admined_apps_v2.*`);

    const processedApps = yourApps.map(
      (app) => new YourApps(app.added_timestamp, app.name)
    );

    this.table.rows.push(...processedApps);
  }
}

export const yourAppsJson = new YourAppsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_apps.json",
  "your_apps"
);
