import config from "../../../config";
import { JsonExtractor } from "../../jsonExtractor";
import { AccountBasedIn } from "../models/accountBasedIn";

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
  "information_about_you/account_based_in.json",
  "account_based_in"
);
