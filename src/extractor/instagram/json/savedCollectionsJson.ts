import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SavedCollections } from "../models/savedCollections.js";

class SavedCollectionsJson extends JsonExtractor {
  async process() {
    const savedCollections = this.query(
      `$.saved_saved_collections[*].string_map_data`
    );

    let common: {
      name: { value: string };
      "created at": { timestamp: number };
      "updated at": { timestamp: number };
    };
    let hasEntries = true;
    savedCollections.forEach((savedCollection) => {
      if (savedCollection.name) {
        if (!hasEntries) {
          this.table.rows.push(
            new SavedCollections({
              name: common.name?.value,
              createdDate: common["created at"]?.timestamp,
              updatedDate: common["updated at"]?.timestamp,
            })
          );
        }
        common = savedCollection;
        hasEntries = false;
      } else {
        this.table.rows.push(
          new SavedCollections({
            name: common.name?.value,
            createdDate: common["created at"]?.timestamp,
            updatedDate: common["updated at"]?.timestamp,
            sharedUrl: savedCollection["shared by"]?.href,
            sharedUsername: savedCollection["shared by"]?.value,
            sharedDate: savedCollection["shared by"]?.timestamp,
          })
        );
        hasEntries = true;
      }
    });
  }
}

export const savedCollectionsJson = new SavedCollectionsJson(
  config.SERVICE_INSTAGRAM,
  ".*/saved_collections.json",
  "saved_collections"
);
