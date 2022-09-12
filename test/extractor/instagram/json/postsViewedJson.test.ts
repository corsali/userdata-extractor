import { postsViewedJson } from "../../../../src/extractor/instagram/json/postsViewedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Posts Viewed (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/ads_and_topics/posts_viewed.json"
    );

    postsViewedJson.setJsonDocument(data);
    postsViewedJson.process();

    const { rows } = postsViewedJson.table;

    expect(rows.length).toEqual(377);

    expect(rows[0].post_author).toEqual(new TextTableValue("myra_studio"));
    expect(rows[0].date_viewed).toEqual(new DateTableValue(1659715377));
    expect(rows[3].post_author).toEqual(
      new TextTableValue("eastbay_yesterday")
    );
    expect(rows[3].date_viewed).toEqual(new DateTableValue(1659715389000));
    expect(rows[152].post_author).toEqual(
      new TextTableValue("mindseyevintage")
    );
    expect(rows[152].date_viewed).toEqual(new DateTableValue(1659819864));
  });
});
