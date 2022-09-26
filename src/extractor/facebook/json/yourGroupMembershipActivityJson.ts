import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourGroupMembershipActivity } from "../models/yourGroupMembershipActivity.js";

class YourGroupMembershipActivityJson extends JsonExtractor {
  async process() {
    const groupMembershipActivity = this.query(`$.groups_joined_v2.*`);

    const processedGroupMembershipActivity = groupMembershipActivity.map(
      (groupActivity) => {
        const activityTitle = groupActivity.title;
        const cutLength =
          activityTitle?.indexOf("a member of ") + "a member of ".length;
        return new YourGroupMembershipActivity({
          groupName:
            groupActivity.data?.[0]?.name ??
            activityTitle?.slice(cutLength, -1),
          activityDate: groupActivity.timestamp,
          activityTitle: groupActivity.title,
        });
      }
    );

    this.table.rows.push(...processedGroupMembershipActivity);
  }
}

export const yourGroupMembershipActivityJson =
  new YourGroupMembershipActivityJson(
    config.SERVICE_FACEBOOK,
    ".*/your_group_membership_activity.json",
    "your_group_membership_activity"
  );
