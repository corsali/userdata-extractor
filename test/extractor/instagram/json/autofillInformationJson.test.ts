import { autofillInformationJson } from "../../../../src/extractor/instagram/json/autofillInformationJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Autofill information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/autofill_information/autofill_information.json"
    );

    autofillInformationJson.setJsonDocument(data);
    autofillInformationJson.process();

    const { rows } = autofillInformationJson.table;

    const expectedValues = [
      ["tel", "4087611937"],
      ["tel_country_code", ""],
      ["tel_national", ""],
      ["tel_area_code", ""],
      ["tel_local", ""],
      ["tel_local_prefix", ""],
      ["tel_local_suffix", ""],
      ["street_address", "2909 Mcclure St Unit A"],
      ["address_line1", "1419 Scott street"],
      ["address_line2", ""],
      ["address_line3", ""],
      ["address_level1", "CA"],
      ["address_level2", "El Cerrito"],
      ["address_level3", ""],
      ["address_level4", ""],
      ["country", ""],
      ["country_name", ""],
      ["postal_code", "94530"],
      ["email", "johndoe@gmail.com"],
      ["family_name", "Stevenson"],
      ["given_name", "Colin"],
    ];

    expect(rows.length).toEqual(expectedValues.length);

    for (let i = 0; i < expectedValues.length; i++) {
      expect(rows[i].field_name).toEqual(
        new TextTableValue(expectedValues[i][0])
      );
      expect(rows[i].field_value).toEqual(
        new TextTableValue(expectedValues[i][1])
      );
    }
  });
});
