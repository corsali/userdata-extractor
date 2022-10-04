import { surveyResponseJson } from "../../../../src/extractor/facebook/json/surveyResponsesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Survey Responses (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/survey_responses.json"
    );

    surveyResponseJson.setJsonDocument(data);
    surveyResponseJson.process();

    const { rows } = surveyResponseJson.table;

    const expectedValues = [
      {
        rating: "neutral",
        raw_timestamp: 1603302758,
        user_name: "Shawn Hagene",
        business_name: "Tovala",
        questionnaire_data: "product_quality",
      },
      {
        rating: "neutral",
        raw_timestamp: 1603302758,
        user_name: "Shawn Hagene",
        business_name: "Tovala",
        questionnaire_data: "not_as_advertised",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].rating).toEqual(
        new TextTableValue(expectedValue.rating)
      );
      expect(rows[index].date_responded).toEqual(
        new DateTableValue(expectedValue.raw_timestamp)
      );
      expect(rows[index].user_name).toEqual(
        new TextTableValue(expectedValue.user_name)
      );
      expect(rows[index].business_name).toEqual(
        new TextTableValue(expectedValue.business_name)
      );
      expect(rows[index].questionnaire_data).toEqual(
        new TextTableValue(expectedValue.questionnaire_data)
      );
    });
  });
});
