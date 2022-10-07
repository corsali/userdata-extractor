import config from "../../../config/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { SearchHistory } from "../models/searchHistory.js";

class SearchHistoryHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelectorAll(".outer-cell > .mdl-grid")
      .forEach((node) => {
        const platform = node.querySelector(".header-cell").textContent;

        const contentNode = node.querySelector(".content-cell");

        const actionType = /(?<actionType>[^<]*)&nbsp;</
          .exec(contentNode.innerHTML)
          ?.groups?.actionType?.trim?.();

        const videoNode = contentNode.querySelector("a");

        const dateString = contentNode.innerHTML.match(
          /<br>(?<lastLine>[^<]*)$/
        )?.groups?.lastLine;
        const actionDate = new Date(dateString);

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
            new SearchHistory({
              platform,
              actionType,
              videoTitle: videoNode.textContent?.trim?.(),
              videoUrl: videoNode.attributes?.href?.value,
              actionDate,
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

export const searchHistoryHtml = new SearchHistoryHtml(
  config.SERVICE_YOUTUBE,
  ".*/search-history.html",
  "search_history"
);
