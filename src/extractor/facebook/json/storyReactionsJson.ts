import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { StoryReactions } from "../models/storyReactions.js";

class StoryReactionsJson extends JsonExtractor {
  async process() {
    const storyReactions = this.query(`$.stories_feedback_v2.*`);

    const processedStoryReactions = storyReactions.map(
      (storyReaction) =>
        new StoryReactions(
          storyReaction.title,
          storyReaction.timestamp,
          storyReaction.attachments
        )
    );

    this.table.rows.push(...processedStoryReactions);
  }
}

export const storyReactionsJson = new StoryReactionsJson(
  config.SERVICE_FACEBOOK,
  ".*/story_reactions.json",
  "story_reactions"
);
