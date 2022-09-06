import { primaryPublicLocationJson } from "../../../../src/extractor/facebook/json/primaryPublicLocationJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Primary Public Location (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/location/primary_public_location.json"
    );

    primaryPublicLocationJson.setJsonDocument(data);
    primaryPublicLocationJson.process();

    const { rows } = primaryPublicLocationJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].city).toEqual(new TextTableValue("Cardiff"));
    expect(rows[0].region).toEqual(new TextTableValue("Wales"));
    expect(rows[0].country).toEqual(new TextTableValue("United Kingdom"));
  });
});
