import { watchHistoryHtml } from "../../../../src/extractor/youtube/html/watchHistoryHtml";
import {
  DateTableValue,
  // IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsHtmlDocument } from "../../../helper";

describe("Watch History (HTML)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsHtmlDocument(
      "/html/youtube/Takeout/YouTube and YouTube Music/history/watch-history.html"
    );

    watchHistoryHtml.setHtmlDocument(data);
    watchHistoryHtml.process();

    const { rows } = watchHistoryHtml.table;

    expect(rows.length).toEqual(3);
    expect(rows[0].platform).toEqual(new TextTableValue("YouTube"));
    expect(rows[0].video_title).toEqual(
      new TextTableValue(
        "Vaughan Williams  Fantasia on a theme of Thomas Tallis HQ"
      )
    );
    expect(rows[0].video_url).toEqual(
      new UrlTableValue("https://www.youtube.com/watch?v=ihx5LCF1yJY")
    );
    expect(rows[0].channel_name).toEqual(new TextTableValue("gb5uq"));
    expect(rows[0].channel_url).toEqual(
      new UrlTableValue(
        "https://www.youtube.com/channel/UCyhghRWJCsrIT1EVH_C62xQ"
      )
    );
    expect(rows[0].date_watched).toEqual(
      new DateTableValue("Apr 14, 2022, 4:15:30 PM EDT")
    );
    // expect(rows[0].watched_times).toEqual(new IntegerTableValue(0));
    expect(rows[0].products).toEqual(new TextTableValue("YouTube"));
    expect(rows[0].details).toEqual(new TextTableValue(""));
    expect(rows[0].settings_info).toEqual(
      new TextTableValue(
        'This activity was saved to your Google Account because the following settings were on:&nbsp;YouTube watch history.&nbsp;You can control these settings &nbsp;<a href="https://myaccount.google.com/activitycontrols">here</a>.'
      )
    );
    // expect(rows[1].watched_times).toEqual(new IntegerTableValue(1));
    expect(rows[1].details).toEqual(new TextTableValue("From Google Ads"));
  });
});
