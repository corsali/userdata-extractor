import { videosWatchedJson } from "../../../../src/extractor/instagram/json/videosWatchedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Videos watched (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/ads_and_topics/videos_watched.json"
    );

    videosWatchedJson.setJsonDocument(data);
    videosWatchedJson.process();

    const { rows } = videosWatchedJson.table;

    expect(rows.length).toEqual(20);

    expect(rows[0].video_author).toEqual(new TextTableValue("arseniohaul"));
    expect(rows[0].date_viewed).toEqual(new DateTableValue(1659715514));
    expect(rows[3].video_author).toEqual(new TextTableValue("thelittlehill"));
    expect(rows[3].date_viewed).toEqual(new DateTableValue(1659800822));
    expect(rows[19].video_author).toEqual(new TextTableValue("bradtroemel"));
    expect(rows[19].date_viewed).toEqual(new DateTableValue(1660311754));
  });
});
