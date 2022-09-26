import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ArchivedStories } from "../models/archivedStories.js";

class ArchivedStoriesJson extends JsonExtractor {
  async process() {
    const archivedStories = this.query(`$.archived_stories_v2.*`);

    const processedArchivedStories = archivedStories.map((archivedStory) => {
      const attachmentDescriptions = archivedStory.attachments
        ?.flatMap((data) => {
          return data?.data?.map?.(
            (media) => media?.media?.description as string
          );
        })
        ?.join(";");

      return new ArchivedStories({
        storyTitle: archivedStory.title,
        dateAdded: archivedStory.timestamp,
        attachments: archivedStory.attachments,
        data: archivedStory.data,
        attachmentDescriptions,
      });
    });

    this.table.rows.push(...processedArchivedStories);
  }
}

export const archivedStoriesJson = new ArchivedStoriesJson(
  config.SERVICE_FACEBOOK,
  ".*/archived_stories.json",
  "archived_stories"
);
