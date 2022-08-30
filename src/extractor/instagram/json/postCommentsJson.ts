import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PostComments } from "../models/postComments.js";

class PostCommentsJson extends JsonExtractor {
  async process() {
    const values = this.query("$.comments_media_comments[*].string_map_data");

    values.forEach((value) => {
      const comment = value.comment.value;
      const dateCommented = value["comment creation time"].timestamp;
      const deletedComment = value["deletion status"].value;
      const mediaOwner = value["media owner"].value;
      this.table.rows.push(
        new PostComments(comment, dateCommented, deletedComment, mediaOwner)
      );
    });
  }
}

export const postCommentsJson = new PostCommentsJson(
  config.SERVICE_INSTAGRAM,
  ".*/post_comments.json",
  "post_comments"
);
