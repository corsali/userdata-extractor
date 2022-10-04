import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourLocalLists } from "../models/yourLocalLists.js";

class YourLocalListsJson extends JsonExtractor {
  async process() {
    const yourLocalLists = this.query(`$.local_lists_v2.*`);

    yourLocalLists.forEach((localList) => {
      const { places } = localList;
      if (!Array.isArray(places) || places.length === 0) {
        this.table.rows.push(
          new YourLocalLists({
            listTitle: localList.title,
            dateCreated: localList.create_timestamp,
            description: localList.description,
            placeName: null,
            placeLatitude: null,
            placeLongitude: null,
            placeAddress: null,
          })
        );
      } else {
        localList.places?.forEach((place: any) => {
          this.table.rows.push(
            new YourLocalLists({
              listTitle: localList.title,
              dateCreated: localList.create_timestamp,
              description: localList.description,
              placeName: place?.name,
              placeLatitude: place?.coordinate?.latitude,
              placeLongitude: place?.coordinate?.longitude,
              placeAddress: place?.address,
            })
          );
        });
      }
    });
  }
}

export const yourLocalListsJson = new YourLocalListsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_local_lists.json",
  "your_local_lists"
);
