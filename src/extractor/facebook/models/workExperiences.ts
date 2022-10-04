import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class WorkExperiences extends FacebookBaseModel {
  employer_name?: TextTableValue;

  description?: TextTableValue;

  job_title?: TextTableValue;

  location?: TextTableValue;

  date_started?: DateTableValue;

  date_ended?: DateTableValue;

  date_added?: DateTableValue;

  constructor(values: {
    employerName: string;
    description: string;
    jobTitle: string;
    location: string;
    dateStarted: number;
    dateEnded: number;
    dateAdded: number;
  }) {
    super();
    this.employer_name = new TextTableValue(values.employerName);
    this.description = new TextTableValue(values.description);
    this.job_title = new TextTableValue(values.jobTitle);
    this.location = new TextTableValue(values.location);
    this.date_started = new DateTableValue(values.dateStarted);
    this.date_ended = new DateTableValue(values.dateEnded);
    this.date_added = new DateTableValue(values.dateAdded);
  }
}
