import { groupYourAnswersToParticipationQuestionsJson } from "../../../../src/extractor/facebook/json/groupYourAnswersToParticipationQuestionsJson";
import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Answers To Participation Questions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/groups/your_answers_to_participation_questions.json"
    );

    groupYourAnswersToParticipationQuestionsJson.setJsonDocument(data);
    groupYourAnswersToParticipationQuestionsJson.process();

    const { rows } = groupYourAnswersToParticipationQuestionsJson.table;

    const expectedValues = [
      {
        question: "What is your favorite 90s Nickelodeon show?",
        answer: "Rugrats",
        timestamp: 1646788369,
        rules_agreement: true,
        group_name: "90s Nickelodeon Gang",
      },
      {
        question: "What 90s Nickelodeon show is overrated?",
        answer: "All that",
        timestamp: 1646788369,
        rules_agreement: true,
        group_name: "90s Nickelodeon Gang",
      },
      {
        question: "Why do you want to join the group?",
        answer: "To adopt a pet.",
        timestamp: 1646430768,
        rules_agreement: false,
        group_name: "Rehoming and Rescue: NE Ohio and Surrounding Areas",
      },
    ];

    expect(rows.length).toEqual(12);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].group_name).toEqual(
        new TextTableValue(expectedValue.group_name)
      );
      expect(rows[index].group_rules_agreement).toEqual(
        new BoolTableValue(expectedValue.rules_agreement)
      );
      expect(rows[index].question).toEqual(
        new TextTableValue(expectedValue.question)
      );
      expect(rows[index].answer).toEqual(
        new TextTableValue(expectedValue.answer)
      );
      expect(rows[index].date_answered).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
