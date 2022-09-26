import { storyStickerInteractionsPollsJson } from "../../../../src/extractor/instagram/json/storyStickerInteractionsPollsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Story Sticker Interactions - Polls (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/story_sticker_interactions/polls.json"
    );

    storyStickerInteractionsPollsJson.setJsonDocument(data);
    storyStickerInteractionsPollsJson.process();

    const { rows } = storyStickerInteractionsPollsJson.table;

    expect(rows.length).toEqual(7);
    expect(rows[0].title).toEqual(new TextTableValue("favoritefinds_"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1659496678));
    expect(rows[0].interaction_type).toEqual(new TextTableValue("polls"));
    expect(rows[6].title).toEqual(new TextTableValue("nabihaider"));
    expect(rows[6].date_created).toEqual(new DateTableValue(1541355144));
    expect(rows[6].interaction_type).toEqual(new TextTableValue("polls"));
  });
});
