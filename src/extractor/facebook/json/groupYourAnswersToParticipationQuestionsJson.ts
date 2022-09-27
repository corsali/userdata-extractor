import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { GroupYourAnswersToParticipationQuestions } from "../models/groupYourAnswersToParticipationQuestions.js";

class GroupYourAnswersToParticipationQuestionsJson extends JsonExtractor {
  async process() {
    const groups = this.query(
      `$.group_participation_questions_answers_v2.group_answers.*`
    );

    groups.forEach((group) =>
      group.answers?.forEach((answer) => {
        this.table.rows.push(
          new GroupYourAnswersToParticipationQuestions({
            groupName: group.group_name,
            groupRulesAgreement: group.rules_agreement,
            question: answer.question,
            answer: answer.answer,
            dateAnswered: answer.timestamp,
          })
        );
      })
    );
  }
}

export const groupYourAnswersToParticipationQuestionsJson =
  new GroupYourAnswersToParticipationQuestionsJson(
    config.SERVICE_FACEBOOK,
    ".*/your_answers_to_participation_questions.json",
    "your_answers_to_participation_questions"
  );
