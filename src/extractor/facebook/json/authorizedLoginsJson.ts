import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AuthorizedLogins } from "../models/authorizedLogins.js";

class AuthorizedLoginsJson extends JsonExtractor {
  async process() {
    const authorizedLogins = this.query(`$.recognized_devices_v2.*`);

    const processedAuthorizedLogins = authorizedLogins.map(
      (authorizedLogin) =>
        new AuthorizedLogins({
          actionName: authorizedLogin.name,
          dateCreated: authorizedLogin.created_timestamp,
          dateUpdated: authorizedLogin.updated_timestamp,
          ipAddress: authorizedLogin.ip_address,
          userAgent: authorizedLogin.user_agent,
          datrCookie: authorizedLogin.datr_cookie,
        })
    );

    this.table.rows.push(...processedAuthorizedLogins);
  }
}

export const authorizedLoginsJson = new AuthorizedLoginsJson(
  config.SERVICE_FACEBOOK,
  ".*/authorized_logins.json",
  "authorized_logins"
);
