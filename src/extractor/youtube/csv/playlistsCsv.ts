import config from "../../../config/index.js";
import { CsvExtractor } from "../../csvExtractor.js";
import { Playlists } from "../models/playlists.js";

class PlaylistsCsv extends CsvExtractor {
  async process() {
    const playlistHeader = await this.parseText(
      this.fileContents.split("\n").slice(0, 2).join("\n")
    );

    const playlistItems = await this.parseText(
      this.fileContents.split("\n").slice(2).join("\n")
    );

    const mappedRow = playlistItems.map(
      (playlistItem: any) =>
        new Playlists({
          playlistId: playlistHeader[0]["playlist id"],
          channelId: playlistHeader[0]["channel id"],
          dateCreated: playlistHeader[0]["time created"],
          dateUpdated: playlistHeader[0]["time updated"],
          playlistTitle: playlistHeader[0].title,
          playlistDescription: playlistHeader[0].description,
          playlistVisibility: playlistHeader[0].visibility,
          itemVideoId: playlistItem["video id"],
          dateItemVideoAdded: playlistItem["time added"],
        })
    );

    this.table.rows.push(...mappedRow);
  }
}

export const playlistsCsv = new PlaylistsCsv(
  config.SERVICE_YOUTUBE,
  "playlists/[^/]*\\.csv",
  "playlists"
);
