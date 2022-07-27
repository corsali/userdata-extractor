import config from "../../../config/index.js";
import { Table } from "../../../models/table/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LoginActivity } from "../models/loginActivity.js";

class LoginActivityJson extends JsonExtractor {
  async process() {
    const loginData = this.query(
      `$.account_history_login_history[*].string_map_data`
    );

    // Turn data into a list of flat object in order to construct new LoginActivity objs
    const flattenedLoginData = loginData.map((login) => {
      return Object.entries(login).reduce(
        (acc: { [key: string]: string }, [k, v]: [string, any]) => {
          const columnName = Table.toPropertyName(k);
          acc[columnName] = v?.value || v?.timestamp;
          return acc;
        },
        {}
      );
    });

    const processedLoginData = flattenedLoginData.map(
      (login) => new LoginActivity(login)
    );

    this.table.rows.push(...processedLoginData);
  }
}

export const loginActivityJson = new LoginActivityJson(
  config.SERVICE_INSTAGRAM,
  "login_and_account_creation/login_activity.json",
  "login_activity"
);
