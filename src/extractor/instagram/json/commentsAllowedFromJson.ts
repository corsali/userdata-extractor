import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { CommentsAllowedFrom } from "../models/commentsAllowedFrom.js";

class CommentsAllowedFromJson extends JsonExtractor {
  async process() {
    const allowedFromData = this.query(
      `$.settings_allow_comments_from.*.string_map_data["Comments Allowed From"].value`
    );

    const processedAllowedFromData = allowedFromData.map(
      (allowedFrom: string) => new CommentsAllowedFrom(allowedFrom)
    );

    this.table.rows.push(...processedAllowedFromData);
  }
}

export const commentsAllowedFromJson = new CommentsAllowedFromJson(
  config.SERVICE_INSTAGRAM,
  ".*/comments_allowed_from.json",
  "comments_allowed_from"
);
