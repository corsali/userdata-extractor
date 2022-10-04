import { educationExperiencesJson } from "../../../../src/extractor/facebook/json/educationExperiencesJson";
import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Information - Education Experiences (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/profile_information/profile_information.json"
    );

    educationExperiencesJson.setJsonDocument(data);
    educationExperiencesJson.process();

    const { rows } = educationExperiencesJson.table;

    const expectedValues = [
      {
        name: "Lake Erie College of Osteopathic Medicine",
        start_timestamp: 1505754480,
        graduated: false,
        concentrations: "",
        school_type: "College",
        timestamp: 1505754494,
      },
      {
        name: "Uconn",
        start_timestamp: 1343804400,
        end_timestamp: 1420056000,
        graduated: true,
        concentrations: "Pre-Medicine/Biology",
        school_type: "College",
        timestamp: 1338156573,
      },
      {
        name: "Coginchaug Regional High School",
        start_timestamp: 1230796800,
        end_timestamp: 1325404800,
        graduated: true,
        concentrations: "",
        school_type: "High school",
        timestamp: 1315251664,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].school_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].school_type).toEqual(
        new TextTableValue(expectedValue.school_type)
      );
      expect(rows[index].concentrations).toEqual(
        new TextTableValue(expectedValue.concentrations)
      );
      expect(rows[index].graduated).toEqual(
        new BoolTableValue(expectedValue.graduated)
      );
      expect(rows[index].date_started).toEqual(
        new DateTableValue(expectedValue.start_timestamp)
      );
      expect(rows[index].date_ended).toEqual(
        new DateTableValue(expectedValue.end_timestamp ?? "")
      );
      expect(rows[index].date_added).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
