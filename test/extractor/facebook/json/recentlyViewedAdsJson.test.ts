import { recentlyViewedAdsJson } from "../../../../src/extractor/facebook/json/recentlyViewedAdsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Viewed Ads (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/your_interactions_on_facebook/recently_viewed.json"
    );

    recentlyViewedAdsJson.setJsonDocument(data);
    recentlyViewedAdsJson.process();

    const { rows } = recentlyViewedAdsJson.table;

    expect(rows.length).toEqual(3);
    expect(rows[0].ad_name).toEqual(new TextTableValue("Ad by DailyBee"));
    expect(rows[0].ad_uri).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/dailybeecom/posts/pfbid02MxWnnxGb5oHUqom6z3EMQMHbjpCzEfPZZjLTXNK9aTjKjofQRaBKxjBD4nyEyGjel"
      )
    );
    expect(rows[0].interaction_date).toEqual(new DateTableValue(1661926416));
    expect(rows[2].ad_name).toEqual(new TextTableValue("Ad by Samsung"));
    expect(rows[2].ad_uri).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/SamsungCzsk/posts/pfbid02ybeGX3tjGCZqnotfphazFz8QHYf8HXDM2ujaqgrbRFHq4QxD3Tzf5gGeZ8ApWdY4l"
      )
    );
    expect(rows[2].interaction_date).toEqual(new DateTableValue(1661925964));
  });
});
