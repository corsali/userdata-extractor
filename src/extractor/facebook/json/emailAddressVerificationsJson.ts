import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { EmailAddressVerifications } from "../models/emailAddressVerifications.js";

class EmailAddressVerificationsJson extends JsonExtractor {
  async process() {
    const emailAddressVerifications = this.query(
      `$.contact_verifications_v2.*`
    );

    const processedVerifications = emailAddressVerifications.map(
      (emailAddressVerification) =>
        new EmailAddressVerifications(
          emailAddressVerification.contact,
          emailAddressVerification.contact_type,
          emailAddressVerification.verification_time
        )
    );

    this.table.rows.push(...processedVerifications);
  }
}

export const emailAddressVerificationsJson = new EmailAddressVerificationsJson(
  config.SERVICE_FACEBOOK,
  ".*/email_address_verifications.json",
  "email_address_verifications"
);
