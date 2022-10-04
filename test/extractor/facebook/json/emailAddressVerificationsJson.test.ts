import { emailAddressVerificationsJson } from "../../../../src/extractor/facebook/json/emailAddressVerificationsJson";
import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Email Address Verifications (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/email_address_verifications.json"
    );

    emailAddressVerificationsJson.setJsonDocument(data);
    emailAddressVerificationsJson.process();

    const { rows } = emailAddressVerificationsJson.table;

    const expectedValues = [
      {
        contact: "janedoe76@gmail.com",
        contact_type: 2,
        verification_time: 1649709605,
      },
      {
        contact: "inumaganasiyoyo219@outlook.com",
        contact_type: 2,
        verification_time: 1631326564,
      },
      {
        contact: "christieclayton2020@gmail.com",
        contact_type: 2,
        verification_time: 1607465408,
      },
      {
        contact: "janedoe1995@gmail.com",
        contact_type: 2,
        verification_time: 1507659503,
      },
      {
        contact: "+12095968144",
        contact_type: 1,
        verification_time: 1646344920,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].contact).toEqual(
        new TextTableValue(expectedValue.contact)
      );
      expect(rows[index].contact_type).toEqual(
        new IntegerTableValue(expectedValue.contact_type)
      );
      expect(rows[index].verification_time).toEqual(
        new DateTableValue(expectedValue.verification_time)
      );
    });
  });
});
