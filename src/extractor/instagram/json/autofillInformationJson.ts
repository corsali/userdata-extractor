import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AutofillInformation } from "../models/autofillInformation.js";

class AutofillInformationJson extends JsonExtractor {
  async process() {
    const autofillInformation = this.query(`$.ig_autofill_data`)[0];

    const processedAutofillInformation = Object.entries(
      autofillInformation
    ).map(
      ([fieldName, fieldValue]: [string, string]) =>
        new AutofillInformation(fieldName, fieldValue)
    );

    this.table.rows.push(...processedAutofillInformation);
  }
}

export const autofillInformationJson = new AutofillInformationJson(
  config.SERVICE_INSTAGRAM,
  ".*/autofill_information.json",
  "autofill_information"
);
