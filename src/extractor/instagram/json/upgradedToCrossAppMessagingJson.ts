import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { UpgradedToCrossAppMessaging } from "../models/upgradedToCrossAppMessaging.js";

class UpgradedToCrossAppMessagingJson extends JsonExtractor {
  async process() {
    const upgradeToCrossAppMessagingData = this.query(
      `$.settings_upgraded_to_cross_app_messaging.*.string_map_data`
    );

    const processedUpgradeToCrossAppMessagingData =
      upgradeToCrossAppMessagingData.map(
        (entry) =>
          new UpgradedToCrossAppMessaging(
            entry["upgraded to cross-app messaging"]?.value,
            entry["time upgraded"]?.timestamp
          )
      );

    this.table.rows.push(...processedUpgradeToCrossAppMessagingData);
  }
}

export const upgradedToCrossAppMessagingJson =
  new UpgradedToCrossAppMessagingJson(
    config.SERVICE_INSTAGRAM,
    ".*/use_cross-app_messaging.json",
    "upgraded_to_cross_app_messaging"
  );
