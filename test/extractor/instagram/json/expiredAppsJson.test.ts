/* eslint-disable no-restricted-syntax */
import { expiredAppsJson } from "../../../../src/extractor/instagram/json/expiredAppsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Expired Apps (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/apps_and_websites/expired_pps.json"
    );

    expiredAppsJson.setJsonDocument(data);
    expiredAppsJson.process();

    const { rows } = expiredAppsJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[0].app_name).toEqual(new TextTableValue("LightWidget"));
    expect(rows[0].expired_on).toEqual(new DateTableValue(1647093862));
    expect(rows[0].user_id).toEqual(new TextTableValue("4073340432730681"));
    expect(rows[1].app_name).toEqual(new TextTableValue("Later"));
    expect(rows[2].app_name).toEqual(new TextTableValue("Hootsuite"));
  });
});
