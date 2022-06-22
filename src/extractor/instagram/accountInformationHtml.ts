import config from "../../config";
import { ColumnType, toBool, toColumnName, toDate } from "../../query/table";
import { HtmlExtractor } from "../htmlExtractor";

class AccountInformationHtml extends HtmlExtractor {
  async process() {
    this.table = {
      tableName: "account_information",
      columns: [],
      rows: [{ values: [] }],
    };

    this.htmlDocument
      .querySelector('div[role="main"] table')
      .querySelectorAll("tr")
      .forEach((node) => {
        const values = node.querySelectorAll("td");
        const columnName = toColumnName(values[0].textContent);
        let columnValue: any = values[1].textContent;
        let columnType = ColumnType.text;

        switch (columnName) {
          case "contact_syncing":
          case "has_shared_live_video":
            columnValue = toBool(columnValue);
            columnType = ColumnType.integer;
            break;
          case "last_login":
          case "first_story_time":
          case "last_story_time":
            columnValue = toDate(columnValue);
            columnType = ColumnType.date;
            break;
          default:
            break;
        }

        this.table.columns.push({
          name: columnName,
          type: columnType,
        });
        this.table.rows[0].values.push(columnValue);
      });
  }
}

export const accountInformationHtml = new AccountInformationHtml(
  config.SERVICE_INSTAGRAM,
  "account_information/account_information.html"
);
