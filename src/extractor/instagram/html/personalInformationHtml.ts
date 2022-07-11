import config from "../../../config/index.js";
import {
  ColumnType,
  toBool,
  toColumnName,
  toDate,
} from "../../../query/table.js";
import { HtmlExtractor } from "../../htmlExtractor.js";

class PersonalInformationHtml extends HtmlExtractor {
  async process() {
    this.htmlDocument
      .querySelector('div[role="main"] table:nth-child(2)')
      .querySelectorAll("tr")
      .forEach((node) => {
        const values = node.querySelectorAll("td");
        const columnName = toColumnName(values[0].textContent);
        let columnValue: any = values[1].textContent;
        let columnType = ColumnType.text;

        switch (columnName) {
          case "phone_confirmed":
          case "private_account":
            columnValue = toBool(columnValue);
            columnType = ColumnType.integer;
            break;
          case "date_of_birth":
            columnValue = toDate(columnValue);
            columnType = ColumnType.date;
            break;
          default:
            break;
        }

        this.table.addColumn(columnName, columnType);
        this.table.rows[0].values.push(columnValue);
      });
  }
}

export const personalInformationHtml = new PersonalInformationHtml(
  config.SERVICE_INSTAGRAM,
  "account_information/personal_information.html",
  "personal_information"
);
