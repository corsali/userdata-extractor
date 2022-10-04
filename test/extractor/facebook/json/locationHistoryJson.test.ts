import { locationHistoryJson } from "../../../../src/extractor/facebook/json/locationHistoryJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Location History (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/location/location_history.json"
    );

    locationHistoryJson.setJsonDocument(data);
    locationHistoryJson.process();

    const { rows } = locationHistoryJson.table;

    expect(rows.length).toEqual(89);
    expect(rows[0].location_name).toEqual(new TextTableValue("Volta"));
    expect(rows[0].location_latitude).toEqual(
      new FloatTableValue(37.055088043213)
    );
    expect(rows[0].location_longitude).toEqual(
      new FloatTableValue(-121.00704956055)
    );
    expect(rows[0].date_created).toEqual(new DateTableValue(1650097863));
    expect(rows[3].location_name).toEqual(new TextTableValue("Newman"));
    expect(rows[3].location_latitude).toEqual(
      new FloatTableValue(37.322158813477)
    );
    expect(rows[3].location_longitude).toEqual(
      new FloatTableValue(-121.01704406738)
    );
    expect(rows[3].date_created).toEqual(new DateTableValue(1628062129));
  });
});
