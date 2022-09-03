import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { GroupInteractions } from "../models/groupInteractions.js";

class GroupInteractionsJson extends JsonExtractor {
  async process() {
    const groupInteractions = this.query(
      `$.group_interactions_v2.*.entries.*.data`
    );

    const processedGroupInteractions = groupInteractions.map(
      (groupInteraction) =>
        new GroupInteractions(
          groupInteraction.name,
          parseInt(groupInteraction.value, 10),
          groupInteraction.uri
        )
    );

    this.table.rows.push(...processedGroupInteractions);
  }
}

export const groupInteractionsJson = new GroupInteractionsJson(
  config.SERVICE_FACEBOOK,
  ".*/group_interactions.json",
  "group_interactions"
);
