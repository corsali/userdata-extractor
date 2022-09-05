import { informationSubmittedToAdvertisersJson as informationXJson } from "../../../../src/extractor/facebook/json/informationSubmittedToAdvertisersJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Information You've Submitted To Advertisers (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/ads_information/information_you've_submitted_to_advertisers.json"
    );

    informationXJson.setJsonDocument(data);
    informationXJson.process();

    const { rows } = informationXJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].label).toEqual(new TextTableValue("Country"));
    expect(rows[0].value).toEqual(new TextTableValue("RW"));
  });
});
