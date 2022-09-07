import { pagesAndProfilesYouFollowJson } from "../../../../src/extractor/facebook/json/pagesAndProfilesYouFollowJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Pages And Profiles You Follow (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/pages_and_profiles/pages_and_profiles_you_follow.json"
    );

    pagesAndProfilesYouFollowJson.setJsonDocument(data);
    pagesAndProfilesYouFollowJson.process();

    const { rows } = pagesAndProfilesYouFollowJson.table;

    const expectedValues: [string, number][] = [
      ["LifeTv", 1577828621],
      ["BIG Events", 1598870322],
      ["FIRE production", 1625632352],
    ];

    expect(rows.length).toEqual(expectedValues.length);

    for (let i = 0; i < expectedValues.length; i++) {
      expect(rows[i].page_name).toEqual(
        new TextTableValue(expectedValues[i][0])
      );
      expect(rows[i].date_followed).toEqual(
        new DateTableValue(expectedValues[i][1])
      );
    }
  });
});
