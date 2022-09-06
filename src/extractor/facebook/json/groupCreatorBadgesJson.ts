import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { GroupCreatorBadges } from "../models/groupCreatorBadges";

class GroupCreatorBadgesJson extends JsonExtractor {
  async process() {
    const groups = this.query(`$.group_badges_v2`)[0];

    const processedGroupCreatorBadges =
      Object.entries(groups)?.flatMap?.(
        ([group, badges]: [string, string[]]) =>
          badges?.map?.(
            (badge: string) => new GroupCreatorBadges(group, badge)
          ) ?? []
      ) ?? [];

    this.table.rows.push(...processedGroupCreatorBadges);
  }
}

export const groupCreatorBadgesJson = new GroupCreatorBadgesJson(
  config.SERVICE_FACEBOOK,
  "groups/creator_badges.json",
  "group_creator_badges"
);
