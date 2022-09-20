import { sellerInformationJson } from "../../../../src/extractor/facebook/json/sellerInformationJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Seller Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_marketplace/seller_information.json"
    );

    sellerInformationJson.setJsonDocument(data);
    sellerInformationJson.process();

    const { rows } = sellerInformationJson.table;

    const expectedValues: [string, string, number][] = [
      ["Legal name", "Georgianne Cleone Gotko", 0],
      ["Date of birth", "", 550882800],
      ["Shipping address", "1197 FLORIDA AVE\nAKRON, OH 44314", 0],
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].field_name).toEqual(
        new TextTableValue(expectedValue[0])
      );
      expect(rows[index].field_value).toEqual(
        new TextTableValue(expectedValue[1])
      );
      expect(rows[index].field_date).toEqual(
        new DateTableValue(expectedValue[2])
      );
    });
  });
});
