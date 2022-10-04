import { interactiveVideosPollsJson } from "../../../../src/extractor/facebook/json/interactiveVideosPollsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Interactive Videos Polls (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/other_activity/interactive_videos.json"
    );

    interactiveVideosPollsJson.setJsonDocument(data);
    interactiveVideosPollsJson.process();

    const { rows } = interactiveVideosPollsJson.table;

    expect(rows.length).toEqual(4);
    expect(rows[0].date_took_poll).toEqual(new DateTableValue(1564154740));
    expect(rows[0].activity_title).toEqual(
      new TextTableValue(
        "Shelby Garrity took the poll Which Fruits Would You Choose For Your Smoothie?? with response Pineapple, Mango & Peach on an ad."
      )
    );
    expect(rows[0].poll_title).toEqual(
      new TextTableValue("Which Fruits Would You Choose For Your Smoothie??")
    );
    expect(rows[0].poll_response).toEqual(
      new TextTableValue("Pineapple, Mango & Peach")
    );
    expect(rows[2].date_took_poll).toEqual(new DateTableValue(1582668815));
    expect(rows[2].activity_title).toEqual(
      new TextTableValue(
        "Shelby Garrity took the poll If You Could Choose One,  Which Ring is Your Fav? with response Left on an ad."
      )
    );
    expect(rows[2].poll_title).toEqual(
      new TextTableValue("If You Could Choose One,  Which Ring is Your Fav?")
    );
    expect(rows[2].poll_response).toEqual(new TextTableValue("Left"));
  });
});
