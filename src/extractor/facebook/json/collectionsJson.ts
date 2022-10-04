import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Collections } from "../models/collections.js";

class CollectionsJson extends JsonExtractor {
  async process() {
    const collections = this.query(`$.collections_v2.*`);

    const processedCollections = collections.map(
      (collection) =>
        new Collections(
          collection.title,
          collection.attachments?.[0]?.data?.[0]?.name,
          collection.timestamp
        )
    );

    this.table.rows.push(...processedCollections);
  }
}

export const collectionsJson = new CollectionsJson(
  config.SERVICE_FACEBOOK,
  ".*/collections.json",
  "collections"
);
