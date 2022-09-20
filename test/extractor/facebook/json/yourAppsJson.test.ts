import { yourAppsJson } from "../../../../src/extractor/facebook/json/yourAppsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Apps (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/apps_and_websites_off_of_facebook/your_apps.json"
    );

    yourAppsJson.setJsonDocument(data);
    yourAppsJson.process();

    const { rows } = yourAppsJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].date_added).toEqual(new DateTableValue(""));
    expect(rows[0].app_name).toEqual(new TextTableValue("Calico Gaming"));
  });
});
