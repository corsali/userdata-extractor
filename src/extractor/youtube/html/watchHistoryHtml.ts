import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { WatchHistory } from "../models/watchHistory.js";

class WatchHistoryHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll(".outer-cell > .mdl-grid")
      .forEach((node) => {
        const platform = node.querySelector(".header-cell").textContent;

        const contentNode = node.querySelector(".content-cell");

        const videoNode = contentNode.querySelector("a");

        const channelNode = contentNode.querySelector("a:nth-of-type(2)");

        const dateString = contentNode.innerHTML.match(
          /<br>(?<lastLine>[^<]*)$/
        )?.groups?.lastLine;
        const dateWatched = new Date(dateString);

        // const watchedTimes =
        //   contentNode.innerHTML.match(/Watched at/g)?.length ?? 0;

        const captionNodeInnerHtml = node.querySelector(
          ".content-cell.mdl-typography--caption"
        ).innerHTML;

        const products = /<b>Products:<\/b><br>(?<products>[^<]*)<br>/
          .exec(captionNodeInnerHtml)
          ?.groups?.products?.trim?.();

        const details = /<b>Details:<\/b><br>(?<details>[^<]*)<br>/
          .exec(captionNodeInnerHtml)
          ?.groups?.details.trim?.();

        const settingsInfo =
          /<b>Why is this here\?<\/b><br>(?<settingsInfo>.*)$/
            .exec(captionNodeInnerHtml)
            ?.groups?.settingsInfo?.trim?.();

        if (videoNode) {
          this.table.rows.push(
            new WatchHistory({
              platform,
              videoTitle: videoNode.textContent?.trim?.(),
              videoUrl: videoNode?.getAttribute("href"),
              channelName: channelNode?.textContent.trim?.(),
              channelUrl: channelNode?.getAttribute("href"),
              dateWatched,
              // watchedTimes,
              products,
              details,
              settingsInfo,
            })
          );
        }
      });
  }
}

export const watchHistoryHtml = new WatchHistoryHtml(
  config.SERVICE_YOUTUBE,
  ".*/watch-history.html",
  "watch_history"
);
