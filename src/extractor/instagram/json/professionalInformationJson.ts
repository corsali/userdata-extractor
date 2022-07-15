import config from "../../../config";
import { JsonExtractor } from "../../jsonExtractor";
import { ProfessionalInformation } from "../models/professionalInformation";

class ProfessionalInformationJson extends JsonExtractor {
  async process() {
    /**
     * TODO: Actually parse data
     */

    this.table.rows.push(new ProfessionalInformation());
  }
}

export const professionalInformationJson = new ProfessionalInformationJson(
  config.SERVICE_INSTAGRAM,
  "account_information/professional_information.json",
  "professional_information"
);
