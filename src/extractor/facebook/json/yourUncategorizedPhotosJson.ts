import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourUncategorizedPhotos } from "../models/yourUncategorizedPhotos.js";

class YourUncategorizedPhotosJson extends JsonExtractor {
  async process() {
    const uncategorizedPhotos = this.query(`$.other_photos_v2.*`);

    const processedUncategorizedPhotos = uncategorizedPhotos.map(
      (photo) =>
        new YourUncategorizedPhotos({
          uri: photo.uri,
          dateCreated: photo.creation_timestamp,
          mediaMetadata: photo.media_metadata,
          description: photo.description,
        })
    );

    this.table.rows.push(...processedUncategorizedPhotos);
  }
}

export const yourUncategorizedPhotosJson = new YourUncategorizedPhotosJson(
  config.SERVICE_FACEBOOK,
  ".*/your_uncategorized_photos.json",
  "your_uncategorized_photos"
);
