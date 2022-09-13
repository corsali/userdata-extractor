import { advertisersYouInteractedWithJson as advertisersXJson } from "../../../../src/extractor/facebook/json/advertisersYouInteractedWithJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Advertisers You've Interacted With (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/ads_information/advertisers_you've_interacted_with.json"
    );

    advertisersXJson.setJsonDocument(data);
    advertisersXJson.process();

    const { rows } = advertisersXJson.table;

    expect(rows.length).toEqual(4);

    expect(rows[0].advertiser_title).toEqual(
      new TextTableValue("34+ Funny Posts Made Before Thinking")
    );
    expect(rows[0].interaction_type).toEqual(new TextTableValue("Clicked ad"));
    expect(rows[0].date_interacted).toEqual(new DateTableValue(1661926416));
    expect(rows[2].advertiser_title).toEqual(
      new TextTableValue("Secrets Behind the Star Wars Franchise")
    );
    expect(rows[2].interaction_type).toEqual(new TextTableValue("Clicked ad"));
    expect(rows[2].date_interacted).toEqual(new DateTableValue(1661494196));
  });
});
