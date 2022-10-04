import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourProblemReports } from "../models/yourProblemReports.js";

class YourProblemReportsJson extends JsonExtractor {
  async process() {
    const problemReports = this.query(`$.messenger_bug_reports.*`);

    const processedProblemReports = problemReports.map(
      (problemReport) =>
        new YourProblemReports(
          problemReport.bug_description,
          problemReport.submission_time
        )
    );

    this.table.rows.push(...processedProblemReports);
  }
}

export const yourProblemReportsJson = new YourProblemReportsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_problem_reports.json",
  "your_problem_reports"
);
