import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { StoryStickerInteractions } from "../models/storyStickerInteractions.js";

class StoryStickerInteractionsPollsJson extends JsonExtractor {
  async process() {
    const polls = this.query(`$.story_activities_polls.*`);

    const processedQuizzes = polls.map(
      (poll) =>
        new StoryStickerInteractions(
          poll.title,
          poll.string_list_data?.[0]?.timestamp,
          "polls"
        )
    );

    this.table.rows.push(...processedQuizzes);
  }
}

export const storyStickerInteractionsPollsJson =
  new StoryStickerInteractionsPollsJson(
    config.SERVICE_INSTAGRAM,
    ".*/story_sticker_interactions/polls.json",
    "story_sticker_interactions"
  );
