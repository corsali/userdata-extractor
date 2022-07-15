import config from "../../../config";
import { Table } from "../../../models/table";
import { JsonExtractor } from "../../jsonExtractor";
import { AccountInformation } from "../models/accountInformation";

class AccountInformationJson extends JsonExtractor {
  async process() {
    const values = this.query("$.profile_account_insights[*].string_map_data");
    const valueMap: { [key: string]: string } = {};

    values.forEach((value) => {
      Object.keys(value).forEach((key) => {
        const columnName = Table.toPropertyName(key);
        valueMap[columnName] = value[key].value || value[key].timestamp;
      });
    });

    this.table.rows.push(new AccountInformation(valueMap));
  }
}

export const accountInformationJson = new AccountInformationJson(
  config.SERVICE_INSTAGRAM,
  "account_information/account_information.json",
  "account_information"
);
