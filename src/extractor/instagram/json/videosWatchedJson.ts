import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { VideosWatched } from "../models/videosWatched.js";

class VideosWatchedJson extends JsonExtractor {
  async process() {
    const videosWatched = this.query(
      `$.impressions_history_videos_watched[*].string_map_data`
    );

    const processedVideosWatched = videosWatched.map(
      (videoWatched) =>
        new VideosWatched(
          videoWatched.author?.value,
          videoWatched.time?.timestamp
        )
    );

    this.table.rows.push(...processedVideosWatched);
  }
}

export const videosWatchedJson = new VideosWatchedJson(
  config.SERVICE_INSTAGRAM,
  ".*/videos_watched.json",
  "videos_watched"
);
