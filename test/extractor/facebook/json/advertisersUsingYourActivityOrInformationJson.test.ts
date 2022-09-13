import { advertisersUsingYourActivityOrInformationJson as advertisersXJson } from "../../../../src/extractor/facebook/json/advertisersUsingYourActivityOrInformationJson";
import { BoolTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Advertisers Using Your Activity Or Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/ads_information/advertisers_using_your_activity_or_information.json"
    );

    advertisersXJson.setJsonDocument(data);
    advertisersXJson.process();

    const { rows } = advertisersXJson.table;

    expect(rows.length).toEqual(7);

    expect(rows[0].advertiser_name).toEqual(new TextTableValue("Performics"));
    expect(rows[0].has_data_file_custom_audience).toEqual(
      new BoolTableValue(false)
    );
    expect(rows[0].has_remarketing_custom_audience).toEqual(
      new BoolTableValue(true)
    );
    expect(rows[0].has_in_person_store_visit).toEqual(
      new BoolTableValue(false)
    );
    expect(rows[5].advertiser_name).toEqual(
      new TextTableValue("The Software House")
    );
    expect(rows[5].has_data_file_custom_audience).toEqual(
      new BoolTableValue(false)
    );
    expect(rows[5].has_remarketing_custom_audience).toEqual(
      new BoolTableValue(true)
    );
    expect(rows[5].has_in_person_store_visit).toEqual(
      new BoolTableValue(false)
    );
  });
});
