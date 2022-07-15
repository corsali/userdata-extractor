import { yourReelsTopicsJson } from "../../../../src/extractor/instagram/json/yourReelsTopicsJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Reels Topics (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/your_topics/your_reels_topics.json"
    );

    yourReelsTopicsJson.loadJson(data);
    yourReelsTopicsJson.process();

    const { rows } = yourReelsTopicsJson.table;

    const expectedTopics = [
      "Fancy Restaurants",
      "Comedy",
      "Outdoor Nature",
      "Vehicles and Transportation",
      "Arts and Crafts",
      "Relationships Friends Family",
      "Beauty, Style, and Fashion",
      "TV and Movies",
      "Science and Education",
      "Dancing",
    ];

    expect(rows.length).toEqual(expectedTopics.length);

    for (let i = 0; i < rows.length; i++) {
      expect(rows[i].topic).toEqual(new TextTableValue(expectedTopics[i]));
    }
  });
});
