import { storyStickerInteractionsStoryLikesJson } from "../../../../src/extractor/instagram/json/storyStickerInteractionsStoryLikesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Story Sticker Interactions - Story Likes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/story_sticker_interactions/story_likes.json"
    );

    storyStickerInteractionsStoryLikesJson.setJsonDocument(data);
    storyStickerInteractionsStoryLikesJson.process();

    const { rows } = storyStickerInteractionsStoryLikesJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].title).toEqual(new TextTableValue("firakina"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1656904799));
    expect(rows[0].interaction_type).toEqual(new TextTableValue("storyLikes"));
  });
});
