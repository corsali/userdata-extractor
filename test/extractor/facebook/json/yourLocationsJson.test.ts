import { yourLocationsJson } from "../../../../src/extractor/facebook/json/yourLocationsJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Locations (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_news/your_locations.json"
    );

    yourLocationsJson.setJsonDocument(data);
    yourLocationsJson.process();

    const { rows } = yourLocationsJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].location_name).toEqual(new TextTableValue("Akron"));
    expect(rows[1].location_name).toEqual(new TextTableValue("Barberton"));
  });
});
