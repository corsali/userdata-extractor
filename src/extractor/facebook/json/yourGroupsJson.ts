import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourGroups } from "../models/yourGroups.js";

class YourGroupsJson extends JsonExtractor {
  async process() {
    const yourGroups = this.query(`$.groups_admined_v2.*`);

    const processedGroups = yourGroups.map(
      (group) => new YourGroups(group.name, group.timestamp)
    );

    this.table.rows.push(...processedGroups);
  }
}

export const yourGroupsJson = new YourGroupsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_groups.json",
  "your_groups"
);
