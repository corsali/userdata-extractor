import { musicLibrarySongsCsv } from "../../../../src/extractor/youtube/csv/musicLibrarySongsCsv";
import { TextTableValue, UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsText } from "../../../helper";

describe("Music Library Songs (CSV)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText(
      "/csv/youtube/Takeout/YouTube and YouTube Music/music-library-songs/music-library-songs.csv"
    );

    musicLibrarySongsCsv.fileContents = data;

    await musicLibrarySongsCsv.process();

    const { rows } = musicLibrarySongsCsv.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].song_url).toEqual(
      new UrlTableValue("https://music.youtube.com/watch?v=1D_f0M1VKzE")
    );
    expect(rows[0].song_title).toEqual(new TextTableValue("Predivný si"));
    expect(rows[0].album_title).toEqual(
      new TextTableValue("Na orlích krídlach")
    );
    expect(rows[0].artist_names).toEqual(new TextTableValue("Timothy"));
  });
});
