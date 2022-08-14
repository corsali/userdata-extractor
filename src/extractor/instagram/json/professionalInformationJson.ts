import config from "../../../config/index.js";
import { Table } from "../../../models/table/table.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfessionalInformation } from "../models/professionalInformation.js";

class ProfessionalInformationJson extends JsonExtractor {
  async process() {
    const values = this.query("$.profile_business[*].string_map_data");
    const valueMap: { [key: string]: string } = {};

    values.forEach((value) => {
      Object.keys(value).forEach((key) => {
        const columnName = Table.toPropertyName(key);
        valueMap[columnName] = value[key].value || value[key].timestamp;
      });
    });

    this.table.rows.push(new ProfessionalInformation(valueMap));
  }
}

export const professionalInformationJson = new ProfessionalInformationJson(
  config.SERVICE_INSTAGRAM,
  ".*/professional_information.json",
  "professional_information"
);
