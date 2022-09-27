import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FacebookWatch } from "../models/facebookWatch.js";

const actionTimeHasYear = /\d{4}/;
const currentTime = new Date();

class FacebookWatchJson extends JsonExtractor {
  async process() {
    const watchedVideos = this.query(`$.watch_videos_v2.*`);

    const processedWatchedVideos = watchedVideos.map((watchedVideo) => {
      const actionTimeString = watchedVideo.action_time as string;
      const actionTime = actionTimeString && new Date(actionTimeString);
      if (actionTime && !actionTimeString?.match(actionTimeHasYear)) {
        actionTime.setFullYear(currentTime.getFullYear());
      }

      return new FacebookWatch({
        videoTitle: watchedVideo.video_title,
        userAction: watchedVideo.user_action,
        actionDate: actionTime,
        feedbackCollection: watchedVideo.feedback_collection,
      });
    });

    this.table.rows.push(...processedWatchedVideos);
  }
}

export const facebookWatchJson = new FacebookWatchJson(
  config.SERVICE_FACEBOOK,
  ".*/facebook_watch.json",
  "facebook_watch"
);
