import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AppsAndWebsites } from "../models/appsAndWebsites.js";

class AppsAndWebsitesJson extends JsonExtractor {
  async process() {
    const appsAndWebsites = this.query(`$.installed_apps_v2.*`);

    const processedAppsAndWebsites = appsAndWebsites.map(
      (appOrWebsite) =>
        new AppsAndWebsites({
          name: appOrWebsite.name,
          dateAdded: appOrWebsite.added_timestamp,
          userAppScopedId: appOrWebsite.user_app_scoped_id?.toString?.(),
          category: appOrWebsite.category,
          dateRemoved: appOrWebsite.removed_timestamp,
        })
    );

    this.table.rows.push(...processedAppsAndWebsites);
  }
}

export const appsAndWebsitesJson = new AppsAndWebsitesJson(
  config.SERVICE_FACEBOOK,
  ".*/apps_and_websites.json",
  "apps_and_websites"
);
