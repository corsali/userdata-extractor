import { adInterestsJson } from "../../../../src/extractor/instagram/json/adsInterestsJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Ad Interests (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/information_about_you/ads_interests.json"
    );

    adInterestsJson.setJsonDocument(data);
    adInterestsJson.process();

    const { rows } = adInterestsJson.table;

    const expectedInterests = [
      "Squarespace",
      "Beach House",
      "Beaches",
      "Taylor Swift",
      "Patagonia",
      "IKEA",
      "Bruno Mars",
      "Outdoor Life",
      "The New York Times",
      "Vivid Sydney",
      "Robyn",
      "Logitech",
      "The North Face",
      "Everlane",
      "Marvel Cinematic Universe",
      "Spotify",
      "Costco",
    ];

    expect(rows.length).toEqual(expectedInterests.length);

    for (let i = 0; i < rows.length; i++) {
      expect(rows[i].interest).toEqual(
        new TextTableValue(expectedInterests[i])
      );
    }
  });
});
