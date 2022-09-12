import { recentlyViewedPostsAndArticlesJson } from "../../../../src/extractor/facebook/json/recentlyViewedPostsAndArticlesJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Viewed Posts and Articles (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/your_interactions_on_facebook/recently_viewed.json"
    );

    recentlyViewedPostsAndArticlesJson.setJsonDocument(data);
    recentlyViewedPostsAndArticlesJson.process();

    const { rows } = recentlyViewedPostsAndArticlesJson.table;

    expect(rows.length).toEqual(4);
    expect(rows[0].post_name).toEqual(
      new TextTableValue("Twitter Adds Warnings (Published 2020)")
    );
    expect(rows[0].post_type).toEqual(new TextTableValue("article"));
    expect(rows[0].date_posted).toEqual(new DateTableValue(1590757459));
    expect(rows[0].post_uri).toEqual(
      new UrlTableValue(
        "https://www.nytimes.com/2020/05/29/technology/twitter-minneapolis.html"
      )
    );
    expect(rows[0].share_link).toEqual(
      new UrlTableValue(
        "https://www.nytimes.com/2020/05/29/technology/twitter-minneapolis.html"
      )
    );
    expect(rows[2].post_name).toEqual(
      new TextTableValue("Animals World , Nature & Quotes's post")
    );
    expect(rows[2].post_type).toEqual(new TextTableValue("post"));
    expect(rows[2].date_posted).toEqual(new DateTableValue(1660205006));
    expect(rows[2].post_uri).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/AnimalsWorldNatureAndQuotes/posts/pfbid02HtjHKPoAjWffiwydzirrNXvtwJen7vTEgwB1p2He228itfBi4SEkBe2gAQuagFcWl"
      )
    );
    expect(rows[2].share_link).toEqual(new UrlTableValue(""));
  });
});
