import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfileUpdateHistory } from "../models/profileUpdateHistory.js";

class ProfileUpdateHistoryJson extends JsonExtractor {
  async process() {
    const profileUpdateHistory = this.query(`$.profile_updates_v2.*`);

    const processedProfileUpdateHistory = profileUpdateHistory.map(
      (profileUpdate) =>
        new ProfileUpdateHistory(profileUpdate.title, profileUpdate.timestamp)
    );

    this.table.rows.push(...processedProfileUpdateHistory);
  }
}

export const profileUpdateHistoryJson = new ProfileUpdateHistoryJson(
  config.SERVICE_FACEBOOK,
  ".*/profile_update_history.json",
  "profile_update_history"
);
