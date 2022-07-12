import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { VideosWatched } from "../models/videosWatched.js";

class VideosWatchedHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node) => {
        const videoAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;
        this.table.rows.push(new VideosWatched(videoAuthor, dateViewed));
      });
  }
}

export const videosWatchedHtml = new VideosWatchedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/videos_watched.html",
  "videos_watched"
);
