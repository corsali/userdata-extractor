import config from "../../../config/index.js";
import {
  ColumnType,
  toBool,
  toColumnName,
  toDate,
} from "../../../query/table.js";
import { JsonExtractor } from "../../jsonExtractor.js";

class AccountInformationJson extends JsonExtractor {
  async process() {
    const values = this.query("$.profile_account_insights[*].string_map_data");
    values.forEach((value, index) => {
      Object.keys(value).forEach((key) => {
        const columnName = toColumnName(key);
        let columnValue: any = value[key].value;
        let columnType = ColumnType.text;

        switch (columnName) {
          case "contact_syncing":
          case "has_shared_live_video":
            columnValue = toBool(columnValue);
            columnType = ColumnType.integer;
            break;
          case "last_login":
          case "last_logout":
          case "first_story_time":
          case "last_story_time":
          case "first_close_friends_story_time":
            columnValue = toDate(value[key].timestamp);
            columnType = ColumnType.date;
            break;
          default:
            break;
        }

        this.table.addColumn(columnName, columnType);
        this.table.rows[index].values.push(columnValue);
      });
    });
  }
}

export const accountInformationJson = new AccountInformationJson(
  config.SERVICE_INSTAGRAM,
  "account_information/account_information.json",
  "account_information"
);
