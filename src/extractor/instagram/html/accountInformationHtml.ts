import config from "../../../config/index.js";
import { Table } from "../../../models/table/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { AccountInformation } from "../models/accountInformation.js";

class AccountInformationHtml extends HtmlExtractor {
  async process() {
    const valueMap: { [key: string]: string } = {};

    this.htmlDocument
      .querySelector('div[role="main"] table')
      .querySelectorAll("tr")
      .forEach((node) => {
        const values = node.querySelectorAll("td");
        const columnName = Table.toPropertyName(values[0].textContent);
        valueMap[columnName] = values[1].textContent;
      });

    this.table.rows.push(new AccountInformation(valueMap));
  }
}

export const accountInformationHtml = new AccountInformationHtml(
  config.SERVICE_INSTAGRAM,
  "account_information/account_information.html",
  "account_information"
);
