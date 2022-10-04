import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { SurveyResponse } from "../models/surveyResponses.js";

class SurveyResponseJson extends JsonExtractor {
  async process() {
    const surveyResponses = this.query(`$.ace_survey_responses_v2.*`);

    surveyResponses.forEach((surveyResponse) => {
      const { questionnaire_data: questionnaireData } = surveyResponse;

      if (questionnaireData == null) {
        this.table.rows.push(
          new SurveyResponse({
            rating: surveyResponse.rating,
            dateResponded: surveyResponse.raw_timestamp,
            userName: surveyResponse.user_name,
            businessName: surveyResponse.business_name,
            questionnaireData: null,
          })
        );
      } else {
        questionnaireData.forEach((questionnaireSingleData) => {
          this.table.rows.push(
            new SurveyResponse({
              rating: surveyResponse.rating,
              dateResponded: surveyResponse.raw_timestamp,
              userName: surveyResponse.user_name,
              businessName: surveyResponse.business_name,
              questionnaireData: questionnaireSingleData,
            })
          );
        });
      }
    });
  }
}

export const surveyResponseJson = new SurveyResponseJson(
  config.SERVICE_FACEBOOK,
  ".*/survey_responses.json",
  "survey_responses"
);
