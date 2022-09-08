/* eslint-disable no-restricted-syntax */
import { possiblePhoneNumbersJson } from "../../../../src/extractor/instagram/json/possiblePhoneNumbersJson";
import { PhoneNumberValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Possible Phone Numbers (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/information_about_you/possible_phone_numbers.json"
    );

    possiblePhoneNumbersJson.setJsonDocument(data);
    possiblePhoneNumbersJson.process();

    const { rows } = possiblePhoneNumbersJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].phone_number).toEqual(new PhoneNumberValue("+61408767540"));
  });
});
