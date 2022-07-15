import config from "../../../config";
import { Table } from "../../../models/table";
import { JsonExtractor } from "../../jsonExtractor";
import { LoginActivity } from "../models/loginActivity";

class LoginActivityJson extends JsonExtractor {
  async process() {
    const loginData = this.query(
      `$.account_history_login_history[*].string_map_data`
    );

    // Turn data into a list of flat object inorder to contruct new LoginActivity objs
    const flattenedLoginData = loginData.map((login) => {
      return Object.entries(login).reduce(
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
