import config from "../../../config/index.js";
import { ColumnType, toDate } from "../../../query/table.js";
import { HtmlExtractor } from "../../htmlExtractor.js";

class PostsViewedHtml extends HtmlExtractor {
  async process() {
    this.table.addColumn("post_author");
    this.table.addColumn("date_viewed", ColumnType.date);

    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node, index) => {
        const postAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;
        this.table.rows[index] = {
          values: [postAuthor, toDate(dateViewed)],
        };
      });
  }
}

export const postsViewedHtml = new PostsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/posts_viewed.html",
  "posts_viewed"
);
