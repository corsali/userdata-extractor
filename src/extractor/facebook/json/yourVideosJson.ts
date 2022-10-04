import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourVideos } from "../models/yourVideos.js";

class YourVideosJson extends JsonExtractor {
  async process() {
    const yourVideos = this.query(`$.videos_v2.*`);

    const processedYourVideos = yourVideos.map(
      (video) =>
        new YourVideos({
          videoTitle: video.title,
          videoUri: video.uri,
          dateCreated: video.creation_timestamp,
          mediaMetadata: video.media_metadata,
          thumbnailUri: video.thumbnail?.uri,
          description: video.description,
        })
    );

    this.table.rows.push(...processedYourVideos);
  }
}

export const yourVideosJson = new YourVideosJson(
  config.SERVICE_FACEBOOK,
  ".*/your_videos.json",
  "your_videos"
);
