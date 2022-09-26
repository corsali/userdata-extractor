import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { StoryStickerInteractions } from "../models/storyStickerInteractions.js";

class StoryStickerInteractionsQuestionsJson extends JsonExtractor {
  async process() {
    const questions = this.query(`$.story_activities_questions.*`);

    const processedQuestions = questions.map(
      (question) =>
        new StoryStickerInteractions(
          question.title,
          question.string_list_data?.[0]?.timestamp,
          "questions"
        )
    );

    this.table.rows.push(...processedQuestions);
  }
}

export const storyStickerInteractionsQuestionsJson =
  new StoryStickerInteractionsQuestionsJson(
    config.SERVICE_INSTAGRAM,
    ".*/story_sticker_interactions/questions.json",
    "story_sticker_interactions"
  );
