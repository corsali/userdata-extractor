import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { MarketplaceNotifications } from "../models/marketplaceNotifications.js";

class MarketplaceNotificationsJson extends JsonExtractor {
  async process() {
    const marketplaceNotifications = this.query(
      `$.marketplace_notifications_v2`
    )[0];

    const processedMarketplaceNotifications = new MarketplaceNotifications(
      marketplaceNotifications.sent_28d,
      marketplaceNotifications.opened_28d,
      marketplaceNotifications.dismissed_28d
    );

    this.table.rows.push(processedMarketplaceNotifications);
  }
}

export const marketplaceNotificationsJson = new MarketplaceNotificationsJson(
  config.SERVICE_FACEBOOK,
  ".*/marketplace_notifications.json",
  "marketplace_notifications"
);
