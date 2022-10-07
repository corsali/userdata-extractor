import config from "../../../config/index.js";
import { CsvExtractor } from "../../csvExtractor.js";
import { Videos } from "../models/videos.js";

class VideosCsv extends CsvExtractor {
  async process() {
    await this.parse();

    const mappedRow = this.csvDocument.map(
      (row: any) =>
        new Videos({
          videoId: row["video id"],
          channelId: row["channel id"],
          title: row.title,
          status: row.status,
          visibility: row.visibility,
          timeCreated: row["time created"],
          timePublished: row["time published"],
          duration: row.duration,
          description: row.description,
          category: row.category,
          locationAddress: row["location address"],
          locationCountry: row["location country"],
          timeRecorded: row["time recorded"],
          likeCount: row["like count"],
          dislikeCount: row["dislike count"],
          viewCount: row["view count"],
          syndication: row.syndication,
          license: row.license,
          embeddable: row.embeddable,
        })
    );

    this.table.rows.push(...mappedRow);
  }
}

export const videosCsv = new VideosCsv(
  config.SERVICE_YOUTUBE,
  ".*/video metadata.csv",
  "videos"
);
