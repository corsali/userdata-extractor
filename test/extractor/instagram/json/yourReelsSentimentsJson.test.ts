import { yourReelsSentimentsJson } from "../../../../src/extractor/instagram/json/yourReelsSentiments";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Reels Sentiments (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/your_topics/your_reels_sentiments.json"
    );

    yourReelsSentimentsJson.loadJson(data);
    yourReelsSentimentsJson.process();

    const { rows } = yourReelsSentimentsJson.table;

    const expectedSentiments = [
      "Adorable",
      "Emotional",
      "Exciting",
      "Fascinating",
      "Funny",
      "Inspiring",
      "Relaxing",
      "Surprising",
    ];

    expect(rows.length).toEqual(expectedSentiments.length);

    for (let i = 0; i < rows.length; i++) {
      expect(rows[i].sentiment).toEqual(
        new TextTableValue(expectedSentiments[i])
      );
    }
  });
});
