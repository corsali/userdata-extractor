import { deviceLocationJson } from "../../../../src/extractor/facebook/json/deviceLocationJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Device Location (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/location/device_location.json"
    );

    deviceLocationJson.setJsonDocument(data);
    deviceLocationJson.process();

    const { rows } = deviceLocationJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].spn).toEqual(new TextTableValue("Verizon Wireless"));
    expect(rows[0].country_code).toEqual(new TextTableValue("310"));
  });
});
