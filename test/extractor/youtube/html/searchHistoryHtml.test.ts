import { searchHistoryHtml } from "../../../../src/extractor/youtube/html/searchHistoryHtml";
import {
  DateTableValue,
  // IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsHtmlDocument } from "../../../helper";

describe("Search History (HTML)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsHtmlDocument(
      "/html/youtube/Takeout/YouTube and YouTube Music/history/search-history.html"
    );

    searchHistoryHtml.setHtmlDocument(data);
    searchHistoryHtml.process();

    const { rows } = searchHistoryHtml.table;

    expect(rows.length).toEqual(7);
    expect(rows[0].platform).toEqual(new TextTableValue("YouTube"));
    expect(rows[0].action_type).toEqual(new TextTableValue("Watched"));
    expect(rows[0].video_title).toEqual(
      new TextTableValue("Stuff | Made to Travel | 30 | Expedia")
    );
    expect(rows[0].video_url).toEqual(
      new UrlTableValue("https://www.youtube.com/watch?v=CMaispXEh94")
    );
    expect(rows[0].action_date).toEqual(
      new DateTableValue("Apr 14, 2022, 4:15:24 PM EDT")
    );
    // expect(rows[0].watched_times).toEqual(new IntegerTableValue(1));
    expect(rows[0].products).toEqual(new TextTableValue("YouTube"));
    expect(rows[0].details).toEqual(new TextTableValue("From Google Ads"));
    expect(rows[0].settings_info).toEqual(
      new TextTableValue(
        'This activity was saved to your Google Account because the following settings were on:&nbsp;YouTube watch history,&nbsp;YouTube search history,&nbsp;Web &amp; App Activity.&nbsp;You can control these settings &nbsp;<a href="https://myaccount.google.com/activitycontrols">here</a>.'
      )
    );
  });
});
