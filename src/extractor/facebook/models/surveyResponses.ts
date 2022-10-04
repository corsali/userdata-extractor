import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class SurveyResponse extends FacebookBaseModel {
  // @todo Very small sample available, the data might not be accurate
  rating?: TextTableValue;

  date_responded?: DateTableValue;

  user_name?: TextTableValue;

  business_name?: TextTableValue;

  questionnaire_data?: TextTableValue;

  constructor(values: {
    rating: string;
    dateResponded: number;
    userName: string;
    businessName: string;
    questionnaireData: string;
  }) {
    super();
    this.rating = new TextTableValue(values.rating);
    this.date_responded = new DateTableValue(values.dateResponded);
    this.user_name = new TextTableValue(values.userName);
    this.business_name = new TextTableValue(values.businessName);
    this.questionnaire_data = new TextTableValue(values.questionnaireData);
  }
}
