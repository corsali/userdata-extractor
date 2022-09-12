/* eslint-disable no-restricted-syntax */
import { audienceInsightsJson } from "../../../../src/extractor/instagram/json/audienceInsightsJson";
import {
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Audience insights (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/past_instagram_insights/audience_insights.json"
    );

    audienceInsightsJson.setJsonDocument(data);
    audienceInsightsJson.process();

    const { rows } = audienceInsightsJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.date_range_from).toEqual(new TextTableValue("Jan 27"));
    expect(row.date_range_to).toEqual(new TextTableValue("Apr 26"));
    expect(row.followers).toEqual(new IntegerTableValue("8"));
  });
});
