import { workExperiencesJson } from "../../../../src/extractor/facebook/json/workExperiencesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Information - Work Experiences (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/profile_information/profile_information.json"
    );

    workExperiencesJson.setJsonDocument(data);
    workExperiencesJson.process();

    const { rows } = workExperiencesJson.table;

    const expectedValues = [
      {
        employer: "Full Time Mommy",
        description: "",
        start_timestamp: 1522857600,
        timestamp: 1583817323,
      },
      {
        employer: "O'Reilly Auto Parts",
        title: "Delivery Driver",
        location: "Akron, Ohio",
        start_timestamp: 1464753600,
        end_timestamp: 1475251200,
        timestamp: 1485932542,
      },
      {
        employer: "Autopart International",
        title: "Driver 1",
        location: "Norton, Massachusetts",
        start_timestamp: 1472702400,
        end_timestamp: 1513098000,
        timestamp: 1485932460,
      },
      {
        employer: "Journeys",
        title: "Assistant Manager",
        start_timestamp: 1385010000,
        end_timestamp: 1388509200,
        timestamp: 1385135386,
      },
      {
        employer: "AutoZone",
        title: "commercial driver",
        location: "Akron, Ohio",
        start_timestamp: 1362729600,
        end_timestamp: 1379228400,
        timestamp: 1368273034,
      },
      {
        employer: "Servpro",
        title: "production crew member",
        start_timestamp: 1262332800,
        end_timestamp: 1306911600,
        timestamp: 1299007914,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].employer_name).toEqual(
        new TextTableValue(expectedValue.employer)
      );
      expect(rows[index].description).toEqual(
        new TextTableValue(expectedValue.description ?? "")
      );
      expect(rows[index].job_title).toEqual(
        new TextTableValue(expectedValue.title ?? "")
      );
      expect(rows[index].location).toEqual(
        new TextTableValue(expectedValue.location ?? "")
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
