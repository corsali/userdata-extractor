import { adsViewedJson } from "../../../../src/extractor/instagram/json/adsViewedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Ads Viewed (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/ads_and_topics/ads_viewed.json"
    );

    adsViewedJson.setJsonDocument(data);
    adsViewedJson.process();

    const { rows } = adsViewedJson.table;

    expect(rows.length).toEqual(154);

    expect(rows[0].ad_author).toEqual(new TextTableValue("sanjoseamigos"));
    expect(rows[0].date_viewed).toEqual(new DateTableValue(1659715376));
    expect(rows[3].ad_author).toEqual(new TextTableValue("dalleyoop"));
    expect(rows[3].date_viewed).toEqual(new DateTableValue(1659715530));
    expect(rows[152].ad_author).toEqual(new TextTableValue("omweekend"));
    expect(rows[152].date_viewed).toEqual(new DateTableValue(1660311607));
  });
});
