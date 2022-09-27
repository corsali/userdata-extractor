import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { WorkExperiences } from "../models/workExperiences.js";

class WorkExperiencesJson extends JsonExtractor {
  async process() {
    const workExperiences = this.query(`$.profile_v2.work_experiences.*`);

    const processedWorkExperiences = workExperiences.map(
      (workExperience) =>
        new WorkExperiences({
          employerName: workExperience?.employer,
          description: workExperience?.description,
          jobTitle: workExperience?.title,
          location: workExperience?.location,
          dateStarted: workExperience?.start_timestamp,
          dateEnded: workExperience?.end_timestamp,
          dateAdded: workExperience?.timestamp,
        })
    );

    this.table.rows.push(...processedWorkExperiences);
  }
}

export const workExperiencesJson = new WorkExperiencesJson(
  config.SERVICE_FACEBOOK,
  ".*/profile_information.json",
  "work_experiences"
);
