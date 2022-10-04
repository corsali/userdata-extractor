import { seeLessLikeThisJson } from "../../../../src/extractor/facebook/json/seeLessLikeThisJson";
import { UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("News - See Less Like This (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_news/see_less_like_this.json"
    );

    seeLessLikeThisJson.setJsonDocument(data);
    seeLessLikeThisJson.process();

    const { rows } = seeLessLikeThisJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].news_url).toEqual(
      new UrlTableValue(
        "https://www.axios.com/zelensky-video-european-parliament-address-ukraine-ed88a2e1-ff9e-471c-9a4d-92e0406ff541.html"
      )
    );
    expect(rows[1].news_url).toEqual(
      new UrlTableValue(
        "https://www.cbsnews.com/news/igor-grichka-bogdanoff-twins-covid-19-deaths-unvaccinated/"
      )
    );
  });
});
