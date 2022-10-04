import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourProblemReports extends FacebookBaseModel {
  bug_description?: TextTableValue;

  date_submitted?: DateTableValue;

  constructor(bugDescription: string, dateSubmitted: number) {
    super();
    this.bug_description = new TextTableValue(bugDescription);
    this.date_submitted = new DateTableValue(dateSubmitted);
  }
}
