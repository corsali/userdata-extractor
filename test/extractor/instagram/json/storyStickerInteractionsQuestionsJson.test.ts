import { storyStickerInteractionsQuestionsJson } from "../../../../src/extractor/instagram/json/storyStickerInteractionsQuestionsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Story Sticker Interactions - Questions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/story_sticker_interactions/questions.json"
    );

    storyStickerInteractionsQuestionsJson.setJsonDocument(data);
    storyStickerInteractionsQuestionsJson.process();

    const { rows } = storyStickerInteractionsQuestionsJson.table;

    expect(rows.length).toEqual(7);
    expect(rows[0].title).toEqual(new TextTableValue("thelittlehill"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1654184111));
    expect(rows[0].interaction_type).toEqual(new TextTableValue("questions"));
    expect(rows[6].title).toEqual(new TextTableValue("ninefrtn"));
    expect(rows[6].date_created).toEqual(new DateTableValue(1611550820));
    expect(rows[6].interaction_type).toEqual(new TextTableValue("questions"));
  });
});
