import config from "../../../config/index.js";
import { flattenWithDotNotation } from "../../../utils/flattenObjectToDotNotation.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfileInformation } from "../models/profileInformation.js";

const isTimestamp = (input: any) =>
  typeof input === "string" && /timestamp$/.test(input);

class ProfileInformationJson extends JsonExtractor {
  async process() {
    // There will be specific extractors written for following.
    const excludedFields = [
      "relationship",
      "family_members",
      "previous_relationships",
      "work_experience",
      "education_experiences",
    ];
    const profileInformation = this.query(`$.profile_v2`)[0];

    Object.entries(profileInformation).forEach(
      ([fieldName, value]: [string, any]) => {
        if (!excludedFields.includes(fieldName)) {
          if (fieldName === "birthday") {
            const birthday = new Date(
              value?.year,
              value?.month - 1,
              value?.day
            );
            this.table.rows.push(
              new ProfileInformation(fieldName, "", birthday)
            );
          } else if (typeof value !== "object") {
            this.table.rows.push(
              new ProfileInformation(
                fieldName,
                isTimestamp(fieldName) ? "" : value,
                isTimestamp(fieldName) ? value : ""
              )
            );
          } else {
            Object.entries(flattenWithDotNotation(value)).forEach(
              ([flatKey, flatValue]) => {
                this.table.rows.push(
                  new ProfileInformation(
                    `${fieldName}.${flatKey}`,
                    isTimestamp(flatKey) ? "" : flatValue,
                    isTimestamp(flatKey) ? flatValue : ""
                  )
                );
              }
            );
          }
        }
      }
    );
  }
}

export const profileInformationJson = new ProfileInformationJson(
  config.SERVICE_FACEBOOK,
  ".*/profile_information.json",
  "profile_information"
);
