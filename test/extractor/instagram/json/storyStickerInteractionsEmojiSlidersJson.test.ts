import { storyStickerInteractionsEmojiSlidersJson } from "../../../../src/extractor/instagram/json/storyStickerInteractionsEmojiSlidersJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Story Sticker Interactions - Emoji Sliders (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/story_sticker_interactions/emoji_sliders.json"
    );

    storyStickerInteractionsEmojiSlidersJson.setJsonDocument(data);
    storyStickerInteractionsEmojiSlidersJson.process();

    const { rows } = storyStickerInteractionsEmojiSlidersJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].title).toEqual(new TextTableValue("_prashg4_"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1561992376));
    expect(rows[0].interaction_type).toEqual(
      new TextTableValue("emojiSliders")
    );
    expect(rows[1].title).toEqual(new TextTableValue("mais_eff"));
    expect(rows[1].date_created).toEqual(new DateTableValue(1534285265));
    expect(rows[1].interaction_type).toEqual(
      new TextTableValue("emojiSliders")
    );
  });
});
