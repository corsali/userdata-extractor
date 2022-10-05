import config from "../../../config/index.js";
import { CsvExtractor } from "../../csvExtractor.js";
import { MusicLibrarySongs } from "../models/musicLibrarySongs.js";

class MusicLibrarySongsCsv extends CsvExtractor {
  async process() {
    this.parse();

    const mappedRow = this.csvDocument.map(
      (row: any) =>
        new MusicLibrarySongs({
          songUrl: row["song url"],
          songTitle: row["song title"],
          albumTitle: row["album title"],
          artistNames: row["artist names"],
        })
    );

    this.table.rows.push(...mappedRow);
  }
}

export const musicLibrarySongsCsv = new MusicLibrarySongsCsv(
  config.SERVICE_YOUTUBE,
  ".*/music-library-songs.csv",
  "music_library_songs"
);
