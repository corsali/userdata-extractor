import config from "../../../config/index.js";
import { CsvExtractor } from "../../csvExtractor.js";
import { Subscriptions } from "../models/subscriptions.js";

class SubscriptionsCsv extends CsvExtractor {
  async process() {
    this.parse({ skipEmptyLines: true });

    const mappedRow = this.csvDocument.map(
      (row: any) =>
        new Subscriptions(
          row["Channel Id"],
          row["Channel Url"],
          row["Channel Title"]
        )
    );

    this.table.rows.push(...mappedRow);
  }
}

export const subscriptionsCsv = new SubscriptionsCsv(
  config.SERVICE_YOUTUBE,
  ".*/subscriptions.csv",
  "subscriptions"
);
