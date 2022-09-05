/* eslint-disable no-restricted-syntax */
import { monetizationJson } from "../../../../src/extractor/instagram/json/monetizationJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Monetization (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/monetization/eligibility.json"
    );

    monetizationJson.setJsonDocument(data);
    monetizationJson.process();

    const { rows } = monetizationJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.product_name).toEqual(new TextTableValue("BRANDED CONTENT"));
    expect(row.decision).toEqual(new TextTableValue("Not Eligible"));
    expect(row.reason).toEqual(
      new TextTableValue(
        "An Established Presence\nThese standards define our requirements for how long your account has been active and that you have a sufficient number of followers."
      )
    );
  });
});
