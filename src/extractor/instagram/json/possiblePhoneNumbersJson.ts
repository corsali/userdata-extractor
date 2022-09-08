import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PossiblePhoneNumbers } from "../models/possiblePhoneNumbers.js";

class PossiblePhoneNumbersJson extends JsonExtractor {
  async process() {
    const phoneNumbers = this.query(
      `$.inferred_data_inferred_phone_numbers[*].string_list_data[*].value`
    );

    const processedPhoneNumbers = phoneNumbers.map(
      (phoneNumber) => new PossiblePhoneNumbers(phoneNumber)
    );

    this.table.rows.push(...processedPhoneNumbers);
  }
}

export const possiblePhoneNumbersJson = new PossiblePhoneNumbersJson(
  config.SERVICE_INSTAGRAM,
  ".*/possible_phone_numbers.json",
  "possible_phone_numbers"
);
