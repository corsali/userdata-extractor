import { advertisersUsingYourActivityOrInformationJson } from "../../../../src/extractor/instagram/json/advertisersUsingYourActivityOrInformationJson";
import { BoolTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Advertisers Using Your Activity Or Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/ads_and_businesses/advertisers_using_your_activity_or_information.json"
    );

    advertisersUsingYourActivityOrInformationJson.setJsonDocument(data);
    advertisersUsingYourActivityOrInformationJson.process();

    const {
      rows: [row, ..._],
    } = advertisersUsingYourActivityOrInformationJson.table;

    expect(row.advertiser_name).toEqual(new TextTableValue("Google"));
    expect(row.has_data_file_custom_audience).toEqual(new BoolTableValue(true));
    expect(row.has_in_person_store_visit).toEqual(new BoolTableValue(false));
    expect(row.has_remarketing_custom_audience).toEqual(
      new BoolTableValue(true)
    );
  });
});
