import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { EducationExperiences } from "../models/educationExperiences.js";

class EducationExperiencesJson extends JsonExtractor {
  async process() {
    const educationExperiences = this.query(
      `$.profile_v2.education_experiences.*`
    );

    const processedEducationExperiences = educationExperiences.map(
      (educationExperience) =>
        new EducationExperiences({
          schoolName: educationExperience.name,
          schoolType: educationExperience.school_type,
          concentrations: educationExperience.concentrations?.join(", "),
          graduated: educationExperience.graduated,
          dateStarted: educationExperience.start_timestamp,
          dateEnded: educationExperience.end_timestamp,
          dateAdded: educationExperience.timestamp,
        })
    );

    this.table.rows.push(...processedEducationExperiences);
  }
}

export const educationExperiencesJson = new EducationExperiencesJson(
  config.SERVICE_FACEBOOK,
  ".*/profile_information.json",
  "education_experiences"
);
