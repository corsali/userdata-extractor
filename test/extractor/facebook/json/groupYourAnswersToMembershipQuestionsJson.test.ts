import { groupYourAnswersToMembershipQuestionsJson } from "../../../../src/extractor/facebook/json/groupYourAnswersToMembershipQuestionsJson";
import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Answers To Membership Questions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/groups/your_answers_to_membership_questions.json"
    );

    groupYourAnswersToMembershipQuestionsJson.setJsonDocument(data);
    groupYourAnswersToMembershipQuestionsJson.process();

    const { rows } = groupYourAnswersToMembershipQuestionsJson.table;

    const expectedValue = {
      question: "Promise to always attach your referral link",
      answer: "Yes",
      timestamp: 1648603320,
      rules_agreement: true,
      group_name: "Referral Links",
    };

    expect(rows.length).toEqual(1);
    expect(rows[0].group_name).toEqual(
      new TextTableValue(expectedValue.group_name)
    );
    expect(rows[0].group_rules_agreement).toEqual(
      new BoolTableValue(expectedValue.rules_agreement)
    );
    expect(rows[0].question).toEqual(
      new TextTableValue(expectedValue.question)
    );
    expect(rows[0].answer).toEqual(new TextTableValue(expectedValue.answer));
    expect(rows[0].date_answered).toEqual(
      new DateTableValue(expectedValue.timestamp)
    );
  });
});
