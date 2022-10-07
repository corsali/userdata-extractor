import { TextTableValue, UrlTableValue } from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class MusicLibrarySongs extends YoutubeBaseModel {
  song_url?: UrlTableValue;

  song_title?: TextTableValue;

  album_title?: TextTableValue;

  artist_names?: TextTableValue;

  constructor(values: {
    songUrl: string;
    songTitle: string;
    albumTitle: string;
    artistNames: string;
  }) {
    super();
    this.song_url = new UrlTableValue(values.songUrl);
    this.song_title = new TextTableValue(values.songTitle);
    this.album_title = new TextTableValue(values.albumTitle);
    this.artist_names = new TextTableValue(values.artistNames);
  }
}
