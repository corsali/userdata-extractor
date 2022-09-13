import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Comments } from "../models/comments.js";

class CommentsJson extends JsonExtractor {
  async process() {
    const comments = this.query(`$.comments_v2.*`);

    const processedComments = comments.map(
      (comment) =>
        new Comments(
          comment.title,
          comment.data?.[0]?.comment?.comment,
          comment.timestamp,
          comment.attachments
        )
    );

    this.table.rows.push(...processedComments);
  }
}

export const commentsJson = new CommentsJson(
  config.SERVICE_FACEBOOK,
  ".*/comments.json",
  "comments"
);
