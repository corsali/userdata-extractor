import { playlistsCsv } from "../../../../src/extractor/youtube/csv/playlistsCsv";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsText } from "../../../helper";

describe("Playlists (CSV)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText(
      "/csv/youtube/Takeout/YouTube and YouTube Music/playlists/Liked videos.csv"
    );

    playlistsCsv.fileContents = data;

    await playlistsCsv.process();
    const { rows } = playlistsCsv.table;

    expect(rows.length).toEqual(132);
    expect(rows[0].playlist_id).toEqual(
      new TextTableValue("LLNu5FKFcXzaEl0Or78tf3CQ")
    );
    expect(rows[0].channel_id).toEqual(
      new TextTableValue("UCNu5FKFcXzaEl0Or78tf3CQ")
    );
    expect(rows[0].date_created).toEqual(new DateTableValue(1452418378));
    expect(rows[0].date_updated).toEqual(new DateTableValue(1641394020));
    expect(rows[0].playlist_title).toEqual(new TextTableValue("Liked videos"));
    expect(rows[0].playlist_description).toEqual(new TextTableValue(""));
    expect(rows[0].playlist_visibility).toEqual(new TextTableValue("Private"));
    expect(rows[0].item_video_id).toEqual(new TextTableValue("wOPEDMsj-lk"));
    expect(rows[0].date_item_video_added).toEqual(
      new DateTableValue(1641394020)
    );
  });
});
