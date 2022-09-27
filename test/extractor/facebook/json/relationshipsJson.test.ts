import { relationshipsJson } from "../../../../src/extractor/facebook/json/relationshipsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Information - Relationships (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/profile_information/profile_information.json"
    );

    relationshipsJson.setJsonDocument(data);
    relationshipsJson.process();

    const { rows } = relationshipsJson.table;

    const expectedValues = [
      {
        person_name: "Bryan Tompkins",
        relationship_type: "In a relationship",
        date_added: 1505886974,
        anniversary_date: new Date(2016, 1, 1),
      },
      {
        person_name: "Kathy Matus",
        relationship_type: "Mother",
        date_added: 1403152525000,
        anniversary_date: 0,
      },
      {
        person_name: "Jerry Matus",
        relationship_type: "Father",
        date_added: 1403152525000,
        anniversary_date: 0,
      },
      {
        person_name: "Chloe Matus",
        relationship_type: "Sister",
        date_added: 1403152525000,
        anniversary_date: 0,
      },
      {
        person_name: "Zyan Coyle",
        relationship_type: "Previous Relationship",
        date_added: 0,
        anniversary_date: 0,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].person_name).toEqual(
        new TextTableValue(expectedValue.person_name)
      );
      expect(rows[index].relationship_type).toEqual(
        new TextTableValue(expectedValue.relationship_type)
      );
      expect(rows[index].date_added).toEqual(
        new DateTableValue(expectedValue.date_added)
      );
      expect(rows[index].anniversary_date).toEqual(
        new DateTableValue(expectedValue.anniversary_date)
      );
    });
  });
});
