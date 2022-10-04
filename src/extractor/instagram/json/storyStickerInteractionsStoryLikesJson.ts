import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { StoryStickerInteractions } from "../models/storyStickerInteractions.js";

class StoryStickerInteractionsStoryLikesJson extends JsonExtractor {
  async process() {
    const storyLikes = this.query(`$.story_activities_story_likes.*`);

    const processedStoryLikes = storyLikes.map(
      (storyLike) =>
        new StoryStickerInteractions(
          storyLike.title,
          storyLike.string_list_data?.[0]?.timestamp,
          "storyLikes"
        )
    );

    this.table.rows.push(...processedStoryLikes);
  }
}

export const storyStickerInteractionsStoryLikesJson =
  new StoryStickerInteractionsStoryLikesJson(
    config.SERVICE_INSTAGRAM,
    ".*/story_sticker_interactions/story_likes.json",
    "story_sticker_interactions"
  );
