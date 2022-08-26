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
        (upgradeToCrossAppMessagingData) =>
          new UpgradedToCrossAppMessaging({
            upgraded:
              upgradeToCrossAppMessagingData["Upgraded To Cross-App Messaging"]
                .value,
            timeUpgraded:
              upgradeToCrossAppMessagingData["Time Upgraded"].timestamp,
          })
      );

    this.table.rows.push(...processedUpgradeToCrossAppMessagingData);
  }
}

export const upgradedToCrossAppMessagingJson =
  new UpgradedToCrossAppMessagingJson(
    config.SERVICE_INSTAGRAM,
    ".*/comments_allowed_from.json",
    "comments_allowed_from"
  );
