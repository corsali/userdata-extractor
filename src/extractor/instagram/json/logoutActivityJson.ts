import config from "../../../config";
import { Table } from "../../../models/table";
import { JsonExtractor } from "../../jsonExtractor";
import { LogoutActivity } from "../models/logoutActivity";

class LogoutActivityJson extends JsonExtractor {
  async process() {
    const logoutData = this.query(
      `$.account_history_logout_history[*].string_map_data`
    );

    // Turn data into a list of flat object inorder to contruct new LogoutActivity objs
    const flattenedLogoutData = logoutData.map((logout) => {
      return Object.entries(logout).reduce(
        (acc: { [key: string]: string }, [k, v]: [string, any]) => {
          const columnName = Table.toPropertyName(k);
          /**
           * Complicated logic here but:
           * 1) Attempt to extract the value key
           * 2) If the value is an EMPTY string ("") then fallback to the "timestamp" key
           * 3) If all else fails, return an empty string
           */
          acc[columnName] = (v && v.value !== "" ? v.value : v.timestamp) ?? "";
          return acc;
        },
        {}
      );
    });

    const processedLogoutData = flattenedLogoutData.map(
      (logout) => new LogoutActivity(logout)
    );

    this.table.rows.push(...processedLogoutData);
  }
}

export const logoutActivityJson = new LogoutActivityJson(
  config.SERVICE_INSTAGRAM,
  "login_and_account_creation/logout_activity.json",
  "logout_activity"
);
