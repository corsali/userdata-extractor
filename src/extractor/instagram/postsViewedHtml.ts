import config from "../../config";
import { ColumnType, toDate } from "../../query/table";
import { HtmlExtractor } from "../htmlExtractor";

class PostsViewedHtml extends HtmlExtractor {
  async process() {
    this.table = {
      tableName: "posts_viewed",
      columns: [],
      rows: [{ values: [] }],
    };

    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node, index) => {
        const postAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;

        this.table.columns = [
          {
            name: "post_author",
            type: ColumnType.text,
          },
          {
            name: "date_viewed",
            type: ColumnType.date,
          },
        ];
        this.table.rows[index] = {
          values: [postAuthor, toDate(dateViewed)],
        };
      });
  }
}

export const postsViewedHtml = new PostsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/posts_viewed.html"
);
