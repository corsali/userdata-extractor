import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyViewedVideos } from "../models/recentlyViewedVideos.js";

class RecentlyViewedVideosJson extends JsonExtractor {
  async process() {
    const fbWatchVideos = this.query(
      `$.recently_viewed[?(@.name=='Facebook Watch Videos and Shows')].children.*`
    );

    fbWatchVideos.forEach((fbWatchVideo) => {
      const { name, description, entries = [] } = fbWatchVideo;
      entries.forEach(
        (entry: {
          timestamp: number;
          data?: { uri: string; name: string; watch_position_seconds: string };
        }) =>
          this.table.rows.push(
            new RecentlyViewedVideos({
              facebookWatch: {
                datatypeName: name,
                datatypeDescription: description,
              },
              videoName: entry?.data?.name,
              videoType: "Facebook Watch",
              dateWatched: entry?.timestamp,
              videoLink: entry?.data?.uri,
              watchPositionSeconds: entry?.data?.watch_position_seconds,
            })
          )
      );
    });

    const otherVideos = this.query(
      `$.recently_viewed[?(@.name=='Videos you have watched')].entries.*`
    );
    otherVideos.forEach((video) => {
      this.table.rows.push(
        new RecentlyViewedVideos({
          videoName: video.data?.name,
          videoType: "other",
          dateWatched: video.timestamp,
          videoLink: video.data?.uri,
        })
      );
    });
  }
}

export const recentlyViewedVideosJson = new RecentlyViewedVideosJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_viewed.json",
  "recently_viewed_videos"
);
