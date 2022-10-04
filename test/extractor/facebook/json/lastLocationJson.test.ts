import { lastLocationJson } from "../../../../src/extractor/facebook/json/lastLocationJson";
import { DateTableValue, FloatTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Last Location (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/location/last_location.json"
    );

    lastLocationJson.setJsonDocument(data);
    lastLocationJson.process();

    const { rows } = lastLocationJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].location_latitude).toEqual(new FloatTableValue(38.77567064));
    expect(rows[0].location_longitude).toEqual(
      new FloatTableValue(-90.58508573)
    );
    expect(rows[0].date_created).toEqual(new DateTableValue(1650659490));
  });
});
