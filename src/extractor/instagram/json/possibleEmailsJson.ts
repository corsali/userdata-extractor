import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PossibleEmails } from "../models/possibleEmails.js";

class PossibleEmailsJson extends JsonExtractor {
  async process() {
    const possibleEmails = this.query(
      `$.inferred_data_inferred_emails.*.string_list_data.*.value`
    );

    const processedPossibleEmails = possibleEmails.map(
      (email) => new PossibleEmails(email)
    );

    this.table.rows.push(...processedPossibleEmails);
  }
}

export const possibleEmailsJson = new PossibleEmailsJson(
  config.SERVICE_INSTAGRAM,
  ".*/possible_emails.json",
  "possible_emails"
);
