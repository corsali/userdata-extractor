import { primaryLocationJson } from "../../../../src/extractor/facebook/json/primaryLocationJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Primary Location (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/location/primary_location.json"
    );

    primaryLocationJson.setJsonDocument(data);
    primaryLocationJson.process();

    const { rows } = primaryLocationJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].city).toEqual(new TextTableValue("LA"));
    expect(rows[0].region).toEqual(new TextTableValue("California"));
    expect(rows[0].zip_code).toEqual(new TextTableValue("902 10"));
  });
});
