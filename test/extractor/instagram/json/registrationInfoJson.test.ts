/* eslint-disable no-restricted-syntax */
import { registrationInfoJson } from "../../../../src/extractor/instagram/json/registrationInfoJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Registration Info (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/login_and_account_creation/signup_information.json"
    );

    registrationInfoJson.setJsonDocument(data);
    registrationInfoJson.process();

    const { rows } = registrationInfoJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.username).toEqual(new TextTableValue("IGUser12345"));
    expect(row.ip_address).toEqual(new TextTableValue("99.244.197.7"));
    expect(row.time).toEqual(new DateTableValue(1463108884));
    expect(row.email).toEqual(new TextTableValue("support@iguser12345.net"));
    expect(row.phone_number).toEqual(new TextTableValue(""));
    expect(row.device).toEqual(new TextTableValue(""));
  });
});
