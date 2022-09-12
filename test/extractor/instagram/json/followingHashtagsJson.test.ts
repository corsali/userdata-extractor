import { followingHashtagsJson } from "../../../../src/extractor/instagram/json/followingHashtagsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Following Hashtags (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/followers_and_following/following_hashtags.json"
    );

    followingHashtagsJson.setJsonDocument(data);
    followingHashtagsJson.process();

    const { rows } = followingHashtagsJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].hashtag_url).toEqual(
      new UrlTableValue("https://www.instagram.com/risograph")
    );
    expect(rows[0].hashtag).toEqual(new TextTableValue("risograph"));
    expect(rows[0].date_followed).toEqual(new DateTableValue(1557600787));
    expect(rows[1].hashtag_url).toEqual(
      new UrlTableValue("https://www.instagram.com/risographzine")
    );
    expect(rows[1].hashtag).toEqual(new TextTableValue("risographzine"));
    expect(rows[1].date_followed).toEqual(new DateTableValue(1557590559));
  });
});
