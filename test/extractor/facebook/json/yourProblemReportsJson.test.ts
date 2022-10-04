import { yourProblemReportsJson } from "../../../../src/extractor/facebook/json/yourProblemReportsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Problem Reports (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_problem_reports/your_problem_reports.json"
    );

    yourProblemReportsJson.setJsonDocument(data);
    yourProblemReportsJson.process();

    const { rows } = yourProblemReportsJson.table;

    const expectedValues = [
      {
        bug_description:
          "Hi! I just lost my phone number used for 2FA verification. I can still access my account but I can't generate new 2FA codes now. Please help me. Thank you!",
        submission_time: 1646410163,
      },
      {
        bug_description: "Not letting me use pay",
        submission_time: 1636848128,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].bug_description).toEqual(
        new TextTableValue(expectedValue.bug_description)
      );
      expect(rows[index].date_submitted).toEqual(
        new DateTableValue(expectedValue.submission_time)
      );
    });
  });
});
