import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfileChanges } from "../models/profileChanges.js";

class ProfileChangesJson extends JsonExtractor {
  async process() {
    const changes = this.query(`$.profile_profile_change[*].string_map_data`);

    const processedChanges = changes
      .map((change) => {
        return {
          changed: change.changed?.href || change.changed?.value,
          previous_value:
            change["previous value"]?.href || change["previous value"]?.value,
          new_value: change["new value"]?.href || change["new value"]?.value,
          change_date: change["change date"]?.timestamp,
        };
      })
      .map((change) => new ProfileChanges(change));

    this.table.rows.push(...processedChanges);
  }
}

export const profileChangesJson = new ProfileChangesJson(
  config.SERVICE_INSTAGRAM,
  ".*/profile_changes.json",
  "profile_changes"
);
