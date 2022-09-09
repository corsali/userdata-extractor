import jp from "jsonpath";

import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourSavedItems } from "../models/yourSavedItems.js";

class YourSavedItemsJson extends JsonExtractor {
  async process() {
    const yourSavedItems = this.query(`$.saves_v2.*`);

    yourSavedItems.forEach((savedItem) => {
      const attachmentDataQueried = jp.query(
        savedItem,
        "$.attachments.*.data.*.external_context"
      );
      const attachmentData =
        attachmentDataQueried?.length > 0 ? attachmentDataQueried : [{}];

      attachmentData.forEach((singleAttachment) =>
        this.table.rows.push(
          new YourSavedItems({
            itemTitle: savedItem.title,
            dateSaved: savedItem.timestamp,
            extDataName: singleAttachment?.name,
            extDataUrl: singleAttachment?.url,
            extDataSource: singleAttachment?.source,
          })
        )
      );
    });
  }
}

export const yourSavedItemsJson = new YourSavedItemsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_saved_items.json",
  "your_saved_items"
);
