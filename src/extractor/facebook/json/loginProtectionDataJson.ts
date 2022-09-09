import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LoginProtectionData } from "../models/loginProtectionData.js";

class LoginProtectionDataJson extends JsonExtractor {
  async process() {
    const loginProtectionData = this.query(`$.login_protection_data_v2.*`);

    const processedLoginProtectionData = loginProtectionData.map(
      (action) =>
        new LoginProtectionData({
          activityName: action.name,
          dateSessionCreated: action.session?.created_timestamp,
          dateSessionUpdated: action.session?.updated_timestamp,
          ipAddress: action.session?.ip_address,
        })
    );

    this.table.rows.push(...processedLoginProtectionData);
  }
}

export const loginProtectionDataJson = new LoginProtectionDataJson(
  config.SERVICE_FACEBOOK,
  ".*/login_protection_data.json",
  "login_protection_data"
);
