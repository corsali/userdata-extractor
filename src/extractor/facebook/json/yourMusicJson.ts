import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourMusic } from "../models/yourMusic.js";

class YourMusicJson extends JsonExtractor {
  async process() {
    const yourMusic = this.query(`$.profile_music_v2.*`);

    const processedMusic = yourMusic.map(
      (music) =>
        new YourMusic(
          music.title,
          music.timestamp,
          music.attachments,
          music.data
        )
    );

    this.table.rows.push(...processedMusic);
  }
}

export const yourMusicJson = new YourMusicJson(
  config.SERVICE_FACEBOOK,
  ".*/your_music.json",
  "your_music"
);
