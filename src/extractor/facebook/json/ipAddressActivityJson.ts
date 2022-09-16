import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { IpAddressActivity } from "../models/ipAddressActivity.js";

class IpAddressActivityJson extends JsonExtractor {
  async process() {
    const accountActivity = this.query(`$.used_ip_address_v2.*`);

    const processedAccountActivity = accountActivity.map(
      (activity) =>
        new IpAddressActivity({
          action: activity.action,
          dateActivityOccurred: activity.timestamp,
          ipAddress: activity.ip,
          userAgent: activity.user_agent,
        })
    );

    this.table.rows.push(...processedAccountActivity);
  }
}

export const ipAddressActivityJson = new IpAddressActivityJson(
  config.SERVICE_FACEBOOK,
  ".*/ip_address_activity.json",
  "ip_address_activity"
);
