import { myCommentsHtml } from "../../../../src/extractor/youtube/html/myCommentsHtml";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsHtmlDocument } from "../../../helper";

describe("My Comments (HTML)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsHtmlDocument(
      "/html/youtube/Takeout/YouTube and YouTube Music/my-comments/my-comments.html"
    );

    myCommentsHtml.setHtmlDocument(data);
    myCommentsHtml.process();

    const { rows } = myCommentsHtml.table;

    expect(rows.length).toEqual(3);
    expect(rows[0].comment_description).toEqual(
      new TextTableValue(
        "You added a comment on a video at 2020-05-24 20:10:05 UTC."
      )
    );
    expect(rows[0].comment_link).toEqual(
      new UrlTableValue(
        "http://www.youtube.com/watch?v=qZI91fucyQ8&lc=UgxEx3xTiRa3Zv_sTsF4AaABAg"
      )
    );
    expect(rows[0].comment_date).toEqual(
      new DateTableValue("2020-05-24 20:10:05 UTC")
    );
    expect(rows[0].commented_content_link).toEqual(
      new UrlTableValue("http://www.youtube.com/watch?v=qZI91fucyQ8")
    );
    expect(rows[0].comment_text).toEqual(
      new TextTableValue(
        "Charge your phone (and your head unit) - otherwise you're asking for a fun ride like I did last Saturday :/"
      )
    );
    expect(rows[2].comment_description).toEqual(
      new TextTableValue(
        "You added a comment on a video at 2019-04-09 22:51:42 UTC."
      )
    );
    expect(rows[2].comment_link).toEqual(
      new UrlTableValue(
        "http://www.youtube.com/watch?v=facmiPgeMNM&lc=UgxHUy0BEeIFa-sgfK94AaABAg"
      )
    );
    expect(rows[2].comment_date).toEqual(
      new DateTableValue("2019-04-09 22:51:42 UTC")
    );
    expect(rows[2].commented_content_link).toEqual(
      new UrlTableValue("http://www.youtube.com/watch?v=facmiPgeMNM")
    );
    expect(rows[2].comment_text).toEqual(
      new TextTableValue(
        "So it cost you about 800. Do you plan to keep it? Just wondering how much you might really be able to sell it for?"
      )
    );
  });
});
