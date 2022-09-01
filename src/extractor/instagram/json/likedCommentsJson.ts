import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LikedComments } from "../models/likedComments.js";

class LikedCommentsJson extends JsonExtractor {
  async process() {
    const comments = this.query(`$.likes_comment_likes[*]`);

    const processedComments = comments.flatMap((commentSet) =>
      commentSet.string_list_data.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (comment: any) =>
          new LikedComments({
            title: commentSet.title,
            commentUrl: comment.href,
            action: comment.value,
            dateLiked: comment.timestamp,
          })
      )
    );

    this.table.rows.push(...processedComments);
  }
}

export const likedCommentsJson = new LikedCommentsJson(
  config.SERVICE_INSTAGRAM,
  ".*/liked_comments.json",
  "liked_comments"
);
