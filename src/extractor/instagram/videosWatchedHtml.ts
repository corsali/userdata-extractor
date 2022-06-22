import config from "../../config";
import { ColumnType, toDate } from "../../query/table";
import { HtmlExtractor } from "../htmlExtractor";

class VideosWatchedHtml extends HtmlExtractor {
  async process() {
    this.table = {
      tableName: "videos_watched",
      columns: [],
      rows: [{ values: [] }],
    };

    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node, index) => {
        const videoAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;

        this.table.columns = [
          {
            name: "video_author",
            type: ColumnType.text,
          },
          {
            name: "date_viewed",
            type: ColumnType.date,
          },
        ];
        this.table.rows[index] = {
          values: [videoAuthor, toDate(dateViewed)],
        };
      });
  }
}

export const videosWatchedHtml = new VideosWatchedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/videos_watched.html"
);
