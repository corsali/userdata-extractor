import config from "../../../config/index.js";
import { ColumnType, toDate } from "../../../query/table.js";
import { HtmlExtractor } from "../../htmlExtractor.js";

class VideosWatchedHtml extends HtmlExtractor {
  async process() {
    this.table.addColumn("video_author");
    this.table.addColumn("date_viewed", ColumnType.date);

    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node, index) => {
        const videoAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;
        this.table.rows[index] = {
          values: [videoAuthor, toDate(dateViewed)],
        };
      });
  }
}

export const videosWatchedHtml = new VideosWatchedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/videos_watched.html",
  "videos_watched"
);
