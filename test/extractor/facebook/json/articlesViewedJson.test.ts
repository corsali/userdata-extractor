import { articlesViewedJson } from "../../../../src/extractor/facebook/json/articlesViewedJson";
import { DateTableValue, UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Articles Viewed (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_news/articles_viewed.json"
    );

    articlesViewedJson.setJsonDocument(data);
    articlesViewedJson.process();

    const { rows } = articlesViewedJson.table;

    expect(rows.length).toEqual(38);
    expect(rows[0].news_url).toEqual(
      new UrlTableValue(
        "https://www.nbcnews.com/politics/white-house/russia-slaps-travel-ban-kamala-harris-28-us-officials-businesspeople-rcna25402"
      )
    );
    expect(rows[0].date_clicked).toEqual(new DateTableValue(1650623257));
    expect(rows[1].news_url).toEqual(
      new UrlTableValue(
        "https://www.buzzfeednews.com/article/salvadorhernandez/brian-kolfage-wall-guilty-millions"
      )
    );
    expect(rows[1].date_clicked).toEqual(new DateTableValue(1650623060));
  });
});
