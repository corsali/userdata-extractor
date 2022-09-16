import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Notifications } from "../models/notifications.js";

class NotificationsJson extends JsonExtractor {
  async process() {
    const notifications = this.query(`$.notifications_v2.*`);

    const processedNotifications = notifications.map(
      (notification) =>
        new Notifications({
          dateNotified: notification.timestamp,
          unread: notification.unread,
          notificationUrl: notification.href,
          content: notification.text,
        })
    );

    this.table.rows.push(...processedNotifications);
  }
}

export const notificationsJson = new NotificationsJson(
  config.SERVICE_FACEBOOK,
  "notifications/notifications.json",
  "notifications"
);
