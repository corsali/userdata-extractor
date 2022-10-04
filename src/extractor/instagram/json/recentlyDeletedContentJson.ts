import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyDeletedContent } from "../models/recentlyDeletedContent.js";

class RecentlyDeletedContentJson extends JsonExtractor {
  async process() {
    const recentlyDeletedContent = this.query(`$.ig_recently_deleted_media.*`);

    const processedDeletedContent = recentlyDeletedContent.map(
      (deletedContent) =>
        // Due to only very small data sample using the same extractor as
        // archivedPosts, which is compatible here and might potentially
        // capture other data formats.
        new RecentlyDeletedContent(
          deletedContent.title ?? deletedContent.media?.[0]?.title,
          deletedContent.creation_timestamp ??
            deletedContent.media?.[0]?.creation_timestamp,
          deletedContent.media
        )
    );

    this.table.rows.push(...processedDeletedContent);
  }
}

export const recentlyDeletedContentJson = new RecentlyDeletedContentJson(
  config.SERVICE_INSTAGRAM,
  ".*/recently_deleted_content.json",
  "recently_deleted_content"
);
