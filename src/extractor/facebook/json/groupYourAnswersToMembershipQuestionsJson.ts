import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { GroupYourAnswersToMembershipQuestions } from "../models/groupYourAnswersToMembershipQuestions.js";

class GroupYourAnswersToMembershipQuestionsJson extends JsonExtractor {
  async process() {
    const groups = this.query(
      `$.group_membership_questions_answers_v2.group_answers.*`
    );

    groups.forEach((group) =>
      group.answers?.forEach((answer: any) => {
        this.table.rows.push(
          new GroupYourAnswersToMembershipQuestions({
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

export const groupYourAnswersToMembershipQuestionsJson =
  new GroupYourAnswersToMembershipQuestionsJson(
    config.SERVICE_FACEBOOK,
    ".*/your_answers_to_membership_questions.json",
    "your_answers_to_membership_questions"
  );
