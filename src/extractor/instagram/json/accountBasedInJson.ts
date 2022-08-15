import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AccountBasedIn } from "../models/accountBasedIn.js";

class AccountBasedInJson extends JsonExtractor {
  async process() {
    const interestData = this.query(
      `$.inferred_data_primary_location.*.string_map_data["City Name"].value`
    );

    const processedInterestData: string = interestData[0] ?? "";

    this.table.rows.push(new AccountBasedIn(processedInterestData));
  }
}

export const accountBasedInJson = new AccountBasedInJson(
  config.SERVICE_INSTAGRAM,
  ".*/account_based_in.json",
  "account_based_in"
);
