import { seeMoreLikeThisJson } from "../../../../src/extractor/facebook/json/seeMoreLikeThisJson";
import { UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("News - See More Like This (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_news/see_more_like_this.json"
    );

    seeMoreLikeThisJson.setJsonDocument(data);
    seeMoreLikeThisJson.process();

    const { rows } = seeMoreLikeThisJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].news_url).toEqual(
      new UrlTableValue(
        "https://www.nbcnews.com/news/world/ukraine-russia-war-updates-temporary-cease-fire-mariupol-russia-says-rcna18831"
      )
    );
  });
});
