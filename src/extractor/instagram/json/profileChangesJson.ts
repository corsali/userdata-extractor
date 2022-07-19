import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfileChanges } from "../models/profileChanges.js";

class ProfileChangesJson extends JsonExtractor {
  async process() {
    const changes =
      this.query(`$.profile_profile_change[*].string_map_data`) ?? [];

    /* eslint-disable camelcase */
    const processedChanges = changes
      .map((change) => {
        const {
          Changed: { value: changed },
          "Previous Value": { value: previous_value },
          "New Value": { value: new_value },
          "Change Date": { timestamp: change_date },
        } = change;

        return { changed, previous_value, new_value, change_date };
      })
      .map((change) => new ProfileChanges(change));

    this.table.rows.push(...processedChanges);
  }
}

export const profileChangesJson = new ProfileChangesJson(
  config.SERVICE_INSTAGRAM,
  "account_information/profile_changes.json",
  "profile_changes"
);
