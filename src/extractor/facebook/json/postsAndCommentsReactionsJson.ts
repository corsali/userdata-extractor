import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PostsAndCommentsReactions } from "../models/postsAndCommentsReactions.js";

class PostsAndCommentsReactionsJson extends JsonExtractor {
  async process() {
    const reactions = this.query(`$.reactions_v2.*`);

    const processedReactions = reactions.map(
      (reaction) =>
        new PostsAndCommentsReactions(
          reaction.title,
          reaction.data?.[0]?.reaction?.reaction,
          reaction.timestamp
        )
    );

    this.table.rows.push(...processedReactions);
  }
}

export const postsAndCommentsReactionsJson = new PostsAndCommentsReactionsJson(
  config.SERVICE_FACEBOOK,
  ".*/posts_and_comments.json",
  "posts_and_comments_reactions"
);
