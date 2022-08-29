import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfileChanges } from "../models/profileChanges.js";

class ProfileChangesJson extends JsonExtractor {
  async process() {
    const changes = this.query(`$.profile_profile_change[*].string_map_data`);

    const processedChanges = changes
      .map((change) => {
        const {
          Changed: { href: changedHref, value: changedValue },
          "Previous Value": { href: prevHref, value: prevValue },
          "New Value": { href: newHref, value: newValue },
          "Change Date": { timestamp: changeDate },
        } = change;

        return {
          changed: changedHref || changedValue,
          previous_value: prevHref || prevValue,
          new_value: newHref || newValue,
          change_date: changeDate,
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
