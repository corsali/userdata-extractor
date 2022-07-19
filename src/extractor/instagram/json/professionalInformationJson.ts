import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfessionalInformation } from "../models/professionalInformation.js";

class ProfessionalInformationJson extends JsonExtractor {
  async process() {
    /**
     * TODO: Actually parse data
     */

    this.table.rows.push(new ProfessionalInformation("dummy"));
  }
}

export const professionalInformationJson = new ProfessionalInformationJson(
  config.SERVICE_INSTAGRAM,
  "account_information/professional_information.json",
  "professional_information"
);
