import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class GroupYourAnswersToMembershipQuestions extends FacebookBaseModel {
  group_name?: TextTableValue;

  group_rules_agreement?: BoolTableValue;

  question?: TextTableValue;

  answer?: TextTableValue;

  date_answered?: DateTableValue;

  constructor(values: {
    groupName: string;
    groupRulesAgreement: boolean;
    question: string;
    answer: string;
    dateAnswered: number;
  }) {
    super();
    this.group_name = new TextTableValue(values.groupName);
    this.group_rules_agreement = new BoolTableValue(values.groupRulesAgreement);
    this.question = new TextTableValue(values.question);
    this.answer = new TextTableValue(values.answer);
    this.date_answered = new DateTableValue(values.dateAnswered);
  }
}
