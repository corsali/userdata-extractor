import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { StoryStickerInteractions } from "../models/storyStickerInteractions.js";

class StoryStickerInteractionsQuizzesJson extends JsonExtractor {
  async process() {
    const quizzes = this.query(`$.story_activities_quizzes.*`);

    const processedQuizzes = quizzes.map(
      (question) =>
        new StoryStickerInteractions(
          question.title,
          question.string_list_data?.[0]?.timestamp,
          "quizzes"
        )
    );

    this.table.rows.push(...processedQuizzes);
  }
}

export const storyStickerInteractionsQuizzesJson =
  new StoryStickerInteractionsQuizzesJson(
    config.SERVICE_INSTAGRAM,
    ".*/story_sticker_interactions/quizzes.json",
    "story_sticker_interactions"
  );
