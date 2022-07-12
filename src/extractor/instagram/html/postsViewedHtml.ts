import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { PostsViewed } from "../models/postsViewed.js";

class PostsViewedHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll('div[role="main"] table')
      .forEach((node) => {
        const postAuthor = node.querySelectorAll("td")[1].textContent;
        const dateViewed = node.querySelectorAll("td")[3].textContent;
        this.table.rows.push(new PostsViewed(postAuthor, dateViewed));
      });
  }
}

export const postsViewedHtml = new PostsViewedHtml(
  config.SERVICE_INSTAGRAM,
  "ads_and_topics/posts_viewed.html",
  "posts_viewed"
);
