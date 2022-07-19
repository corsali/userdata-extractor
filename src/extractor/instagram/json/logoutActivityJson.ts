import config from "../../../config/index.js";
import { Table } from "../../../models/table/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LogoutActivity } from "../models/logoutActivity.js";

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
          acc[columnName] = v?.value || v?.timestamp;
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
