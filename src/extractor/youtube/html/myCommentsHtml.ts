import config from "../../../config/index.js";
import { xpathEvaluateIntoArray } from "../../../utils/xpathEvaluateIntoArray.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { MyComments } from "../models/myComments.js";

class MyCommentsHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument.querySelectorAll("body > ul > li").forEach((node) => {
      const commentLink = xpathEvaluateIntoArray(
        ".//a[text()='comment']",
        node
      )?.[0]?.attributes?.href?.value;

      const commentedContentLink = xpathEvaluateIntoArray(".//a[2]", node)?.[0]
        ?.attributes?.href?.value;

      const textContent = node.innerHTML
        .replaceAll(/<a[^>]*>([^<]*)<\/a>/g, "$1")
        .split("<br>");

      const commentDate = new Date(
        textContent[0]?.replace(
          /.*(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} UTC)./,
          "$1"
        )
      );

      this.table.rows.push(
        new MyComments({
          commentDescription: textContent[0],
          commentLink,
          commentDate,
          commentedContentLink,
          commentText: textContent.slice(1).join("\n"),
        })
      );
    });
  }
}

export const myCommentsHtml = new MyCommentsHtml(
  config.SERVICE_YOUTUBE,
  ".*/my-comments.html",
  "my_comments"
);
