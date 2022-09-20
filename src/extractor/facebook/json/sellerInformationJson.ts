import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SellerInformation } from "../models/sellerInformation.js";

const dateRegex = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;

class SellerInformationJson extends JsonExtractor {
  async process() {
    const sellerInformation = this.query(`$.seller_onboarding_information.*.*`);

    const processedSellerInformation = sellerInformation.map((infoEntry) => {
      const dateMatch =
        infoEntry.field_name === "Date of birth" &&
        (infoEntry.field_value as string).match(dateRegex);
      if (dateMatch) {
        return new SellerInformation({
          fieldName: infoEntry.field_name,
          fieldDate: new Date(
            dateMatch.groups.year,
            dateMatch.groups.month - 1,
            dateMatch.groups.day
          ),
        });
      }
      return new SellerInformation({
        fieldName: infoEntry.field_name,
        fieldValue: infoEntry.field_value,
      });
    });

    this.table.rows.push(...processedSellerInformation);
  }
}

export const sellerInformationJson = new SellerInformationJson(
  config.SERVICE_FACEBOOK,
  ".*/seller_information.json",
  "seller_information"
);
