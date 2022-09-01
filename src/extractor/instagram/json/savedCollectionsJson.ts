import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SavedCollections } from "../models/savedCollections.js";

class SavedCollectionsJson extends JsonExtractor {
  async process() {
    const savedCollections = this.query(
      `$.saved_saved_collections[*].string_map_data`
    );

    const processedSavedCollections = savedCollections.map(
      (savedCollection) =>
        new SavedCollections({
          name: savedCollection.name?.value,
          createdDate: savedCollection["created at"]?.timestamp,
          updatedDate: savedCollection["updated at"]?.timestamp,
          sharedUrl: savedCollection["shared by"]?.href,
          sharedUsername: savedCollection["shared by"]?.value,
          sharedDate: savedCollection["shared by"]?.timestamp,
        })
    );

    this.table.rows.push(...processedSavedCollections);
  }
}

export const savedCollectionsJson = new SavedCollectionsJson(
  config.SERVICE_INSTAGRAM,
  ".*/saved_collections.json",
  "saved_collections"
);
