import { accountBasedInJson } from "../../../../src/extractor/instagram/json/accountBasedInJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Based In (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/information_about_you/account_based_in.json"
    );

    accountBasedInJson.setJsonDocument(data);
    accountBasedInJson.process();

    const { rows } = accountBasedInJson.table;
    const row = rows[0];

    expect(row.primary_location).toEqual(
      new TextTableValue("New York, New York")
    );
  });
});
