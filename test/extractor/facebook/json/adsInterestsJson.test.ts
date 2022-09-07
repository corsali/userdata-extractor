import { adsInterestsJson } from "../../../../src/extractor/facebook/json/adsInterestsJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Ads Interests (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/other_logged_information/ads_interests.json"
    );

    adsInterestsJson.setJsonDocument(data);
    adsInterestsJson.process();

    const { rows } = adsInterestsJson.table;

    expect(rows.length).toEqual(6);

    expect(rows[0].topic).toEqual(new TextTableValue("24 Hours of Le Mans"));
    expect(rows[1].topic).toEqual(new TextTableValue("Ancient history"));
    expect(rows[2].topic).toEqual(
      new TextTableValue("Android (operating system)")
    );
    expect(rows[3].topic).toEqual(new TextTableValue("Bicycle"));
    expect(rows[4].topic).toEqual(new TextTableValue("Books"));
    expect(rows[5].topic).toEqual(new TextTableValue("TypeScript"));
  });
});
