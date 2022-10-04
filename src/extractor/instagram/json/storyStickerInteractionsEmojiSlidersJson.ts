import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { StoryStickerInteractions } from "../models/storyStickerInteractions.js";

class StoryStickerInteractionsEmojiSlidersJson extends JsonExtractor {
  async process() {
    const emojiSliders = this.query(`$.story_activities_emoji_sliders.*`);

    const processedEmojiSliders = emojiSliders.map(
      (emojiSlider) =>
        new StoryStickerInteractions(
          emojiSlider.title,
          emojiSlider.string_list_data?.[0]?.timestamp,
          "emojiSliders"
        )
    );

    this.table.rows.push(...processedEmojiSliders);
  }
}

export const storyStickerInteractionsEmojiSlidersJson =
  new StoryStickerInteractionsEmojiSlidersJson(
    config.SERVICE_INSTAGRAM,
    ".*/story_sticker_interactions/emoji_sliders.json",
    "story_sticker_interactions"
  );
