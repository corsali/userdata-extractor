import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourCommentsInGroups } from "../models/yourCommentsInGroups";

class YourCommentsInGroupsJson extends JsonExtractor {
  async process() {
    const groupComments = this.query(`$.group_comments_v2.*`);

    const processedGroupComments = groupComments.map(
      (group) =>
        new YourCommentsInGroups({
          groupName: group.data?.[0]?.comment?.group,
          dateCommented: group.timestamp,
          comment: group.data?.[0]?.comment?.comment,
          commentTitle: group.title,
        })
    );

    this.table.rows.push(...processedGroupComments);
  }
}

export const yourCommentsInGroupsJson = new YourCommentsInGroupsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_comments_in_groups.json",
  "your_comments_in_groups"
);
