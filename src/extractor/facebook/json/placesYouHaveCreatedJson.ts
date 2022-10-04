import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PlacesYouHaveCreated } from "../models/placesYouHaveCreated.js";

class PlacesYouHaveCreatedJson extends JsonExtractor {
  async process() {
    const collections = this.query(`$.your_places_v2.*`);

    const processedCollections = collections.map(
      (collection) =>
        new PlacesYouHaveCreated({
          placeName: collection.name,
          coordinateLatitude: collection.coordinate?.latitude,
          coordinateLongitude: collection.coordinate?.longitude,
          address: collection.address,
          url: collection.url,
          dateCreated: collection.creation_timestamp,
        })
    );

    this.table.rows.push(...processedCollections);
  }
}

export const placesYouHaveCreatedJson = new PlacesYouHaveCreatedJson(
  config.SERVICE_FACEBOOK,
  ".*/places_you've_created.json",
  "places_you_have_created"
);
