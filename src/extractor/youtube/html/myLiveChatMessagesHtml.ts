import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { MyLiveChatMessages } from "../models/myLiveChatMessages.js";

class MyLiveChatMessagesHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument.querySelectorAll("body > ul > li").forEach((node) => {
      const textContent = node.innerHTML
        .replaceAll(/<a[^>]*>([^<]*)<\/a>/g, "$1")
        .split("<br>");

      const datePosted = new Date(
        textContent[0]?.replace(
          /.*(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} UTC).*/,
          "$1"
        )
      );

      this.table.rows.push(
        new MyLiveChatMessages({
          messageTitle: textContent[0],
          datePosted,
          contentUrl: node.querySelector("a")?.attributes?.href?.value,
          messageText: textContent.slice(1).join("\n"),
        })
      );
    });
  }
}

export const myLiveChatMessagesHtml = new MyLiveChatMessagesHtml(
  config.SERVICE_YOUTUBE,
  ".*/my-live-chat-messages.html",
  "my_live_chat_messages"
);
