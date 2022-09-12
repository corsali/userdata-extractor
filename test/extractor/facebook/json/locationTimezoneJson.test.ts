import { locationTimezoneJson } from "../../../../src/extractor/facebook/json/locationTimezoneJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Location Timezone (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/location/timezone.json"
    );

    locationTimezoneJson.setJsonDocument(data);
    locationTimezoneJson.process();

    const { rows } = locationTimezoneJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].timezone).toEqual(new TextTableValue("Europe/London"));
  });
});
