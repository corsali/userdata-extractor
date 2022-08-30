import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PostComments } from "../models/postComments.js";

class PostCommentsJson extends JsonExtractor {
  async process() {
    const values = this.query("$.comments_media_comments[*].string_map_data");

    values.forEach((value) => {
      const comment = value.Comment.value;
      const dateCommented = value["Comment creation time"].timestamp;
      const deletedComment = value["Deletion status"].value;
      const mediaOwner = value["Media owner"].value;
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
