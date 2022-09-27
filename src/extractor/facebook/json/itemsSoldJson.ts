import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ItemsSold } from "../models/itemsSold.js";

class ItemsSoldJson extends JsonExtractor {
  async process() {
    const itemsSold = this.query(`$.items_selling_v2.*`);

    const processedItemsSold = itemsSold.map(
      (itemSold) =>
        new ItemsSold({
          itemTitle: itemSold.title,
          price: itemSold.price,
          sellerName: itemSold.seller,
          dateCreated: itemSold.created_timestamp,
          dateUpdated: itemSold.updated_timestamp,
          category: itemSold.category,
          marketplace: itemSold.marketplace,
          locationLatitude: itemSold.location?.coordinate?.latitude,
          locationLongitude: itemSold.location?.coordinate?.longitude,
          description: itemSold.description,
        })
    );

    this.table.rows.push(...processedItemsSold);
  }
}

export const itemsSoldJson = new ItemsSoldJson(
  config.SERVICE_FACEBOOK,
  ".*/items_sold.json",
  "items_sold"
);
