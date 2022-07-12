import config from "../../../config/index.js";
import { Table } from "../../../models/table/index.js";
import { HtmlExtractor } from "../../htmlExtractor.js";
import { PersonalInformation } from "../models/personalInformation.js";

class PersonalInformationHtml extends HtmlExtractor {
  async process() {
    const valueMap: { [key: string]: string } = {};

    this.htmlDocument
      .querySelector('div[role="main"] table:nth-child(2)')
      .querySelectorAll("tr")
      .forEach((node) => {
        const values = node.querySelectorAll("td");
        const columnName = Table.toPropertyName(values[0].textContent);
        valueMap[columnName] = values[1].textContent;
      });

    this.table.rows.push(new PersonalInformation(valueMap));
  }
}

export const personalInformationHtml = new PersonalInformationHtml(
  config.SERVICE_INSTAGRAM,
  "account_information/personal_information.html",
  "personal_information"
);
