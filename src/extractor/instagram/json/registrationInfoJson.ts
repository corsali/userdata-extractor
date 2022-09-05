import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RegistrationInfo } from "../models/registrationInfo.js";

class RegistrationInfoJson extends JsonExtractor {
  async process() {
    const registrationInfo = this.query(
      `$.account_history_registration_info[*].string_map_data`
    )[0];

    const processedRegistrationInfo = new RegistrationInfo({
      username: registrationInfo.username?.value,
      ipAddress: registrationInfo["ip address"]?.value,
      time: registrationInfo.time?.timestamp,
      email: registrationInfo.email?.value,
      phoneNumber: registrationInfo["phone number"]?.value,
      device: registrationInfo.device?.value,
    });
    this.table.rows.push(processedRegistrationInfo);
  }
}

export const registrationInfoJson = new RegistrationInfoJson(
  config.SERVICE_INSTAGRAM,
  ".*/signup_information.json",
  "registration_info"
);
