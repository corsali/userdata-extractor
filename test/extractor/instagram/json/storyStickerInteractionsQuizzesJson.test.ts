import { storyStickerInteractionsQuizzesJson } from "../../../../src/extractor/instagram/json/storyStickerInteractionsQuizzesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Story Sticker Interactions - Quizzes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/story_sticker_interactions/quizzes.json"
    );

    storyStickerInteractionsQuizzesJson.setJsonDocument(data);
    storyStickerInteractionsQuizzesJson.process();

    const { rows } = storyStickerInteractionsQuizzesJson.table;

    expect(rows.length).toEqual(7);
    expect(rows[0].title).toEqual(new TextTableValue("highstrike"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1632757269));
    expect(rows[0].interaction_type).toEqual(new TextTableValue("quizzes"));
    expect(rows[6].title).toEqual(new TextTableValue("programmerplus"));
    expect(rows[6].date_created).toEqual(new DateTableValue(1561947923));
    expect(rows[6].interaction_type).toEqual(new TextTableValue("quizzes"));
  });
});
