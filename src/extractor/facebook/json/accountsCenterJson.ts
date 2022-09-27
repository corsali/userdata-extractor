import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AccountsCenter } from "../models/accountsCenter.js";

class AccountsCenterJson extends JsonExtractor {
  async process() {
    const accountsCenter = this.query(`$.accounts_center_v2.*`);

    const processedAccountsCenter = accountsCenter.map(
      (accountCenter) =>
        new AccountsCenter({
          serviceName: accountCenter.service_name,
          nativeAppId: accountCenter.native_app_id,
          username: accountCenter.username,
          email: accountCenter.email,
          phoneNumber: accountCenter.phone_number,
          fullName: accountCenter.name,
          dateLinked: accountCenter.linked_time,
        })
    );

    this.table.rows.push(...processedAccountsCenter);
  }
}

export const accountsCenterJson = new AccountsCenterJson(
  config.SERVICE_FACEBOOK,
  ".*/accounts_center.json",
  "accounts_center"
);
