import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PasswordChangeHistory } from "../models/passwordChangeHistory.js";

class PasswordChangeHistoryJson extends JsonExtractor {
  async process() {
    const passwordChanges = this.query(
      `$.account_history_password_change_history[*].string_map_data`
    );

    const processedPasswordChanges = passwordChanges.map(
      (passwordChange) =>
        new PasswordChangeHistory(passwordChange.time.timestamp)
    );

    this.table.rows.push(...processedPasswordChanges);
  }
}

export const passwordChangeHistoryJson = new PasswordChangeHistoryJson(
  config.SERVICE_INSTAGRAM,
  ".*/password_change_activity.json",
  "password_change_history"
);
