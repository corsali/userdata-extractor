import { profileInformationJson } from "../../../../src/extractor/facebook/json/profileInformationJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/profile_information/profile_information.json"
    );

    profileInformationJson.setJsonDocument(data);
    profileInformationJson.process();

    const { rows } = profileInformationJson.table;

    const expectedValues: [string, string | boolean, number][] = [
      ["name.full_name", "Jane Doe", 0],
      ["name.first_name", "Jane", 0],
      ["name.middle_name", "", 0],
      ["name.last_name", "Doe", 0],
      ["emails.emails.0", "janedoe76@gmail.com", 0],
      ["emails.emails.1", "inumaganasiyoyo219@outlook.com", 0],
      ["emails.emails.2", "christieclayton2020@gmail.com", 0],
      ["emails.emails.3", "janedoe1995@gmail.com", 0],
      ["birthday", "", 815720400000],
      ["gender.gender_option", "FEMALE", 0],
      ["gender.pronoun", "FEMALE", 0],
      ["previous_names.0.name", "Janie Clayton", 0],
      ["previous_names.0.timestamp", "", 1630078346000],
      ["previous_names.1.name", "Jane Doe", 0],
      ["previous_names.1.timestamp", "", 1611636202000],
      ["other_names.0.name", "Bean", 0],
      ["other_names.0.type", "nickname", 0],
      ["other_names.0.timestamp", "", 1526187316000],
      ["current_city.name", "Newman, California", 0],
      ["current_city.timestamp", "", 0],
      ["hometown.name", "Oklahoma City, Oklahoma", 0],
      ["hometown.timestamp", "", 0],
      ["blood_info.blood_donor_status", "unregistered", 0],
      ["phone_numbers.0.phone_type", "Mobile", 0],
      ["phone_numbers.0.phone_number", "+12095968144", 0],
      ["phone_numbers.0.verified", true, 0],
      ["registration_timestamp", "", 1507659230000],
      ["profile_uri", "https://www.facebook.com/bean.doe.9", 0],
    ];

    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].field_name).toEqual(
        new TextTableValue(expectedValue[0])
      );
      expect(rows[index].field_text).toEqual(
        new TextTableValue(expectedValue[1])
      );
      expect(rows[index].field_date).toEqual(
        new DateTableValue(expectedValue[2])
      );
    });
  });
});
