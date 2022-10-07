import { myLiveChatMessagesHtml } from "../../../../src/extractor/youtube/html/myLiveChatMessagesHtml";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsHtmlDocument } from "../../../helper";

describe("My Live Chat Messages (HTML)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsHtmlDocument(
      "/html/youtube/Takeout/YouTube and YouTube Music/my-live-chat-messages/my-live-chat-messages.html"
    );

    myLiveChatMessagesHtml.setHtmlDocument(data);
    myLiveChatMessagesHtml.process();

    const { rows } = myLiveChatMessagesHtml.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].message_title).toEqual(
      new TextTableValue(
        "Sent at 2019-08-24 12:43:19 UTC while watching a video."
      )
    );
    expect(rows[0].date_posted).toEqual(new DateTableValue(1566650599));
    expect(rows[0].content_url).toEqual(
      new UrlTableValue("http://www.youtube.com/watch?v=VPcsiYYubi0")
    );
    expect(rows[0].message_text).toEqual(
      new TextTableValue("Rest in peace John De Mathew")
    );
  });
});
