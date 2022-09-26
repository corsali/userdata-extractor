import { storyReactionsJson } from "../../../../src/extractor/facebook/json/storyReactionsJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Story Reactions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/stories/story_reactions.json"
    );

    storyReactionsJson.setJsonDocument(data);
    storyReactionsJson.process();

    const { rows } = storyReactionsJson.table;

    expect(rows.length).toEqual(10);
    expect(rows[2].reaction_title).toEqual(
      new TextTableValue(
        "Georgianne Cleone Gotko voted on a poll in Steve Prok's story."
      )
    );
    expect(rows[2].date_reacted).toEqual(new DateTableValue(1584462367));
    expect(rows[2].attachments).toEqual(
      new JsonTableValue([
        {
          data: [
            { poll: { options: [{ option: "POWER GRAB ", voted: true }] } },
          ],
        },
      ])
    );
  });
});
