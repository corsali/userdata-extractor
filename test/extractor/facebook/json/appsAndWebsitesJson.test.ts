import { appsAndWebsitesJson } from "../../../../src/extractor/facebook/json/appsAndWebsitesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Apps and Websites (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/apps_and_websites_off_of_facebook/apps_and_websites.json"
    );

    appsAndWebsitesJson.setJsonDocument(data);
    appsAndWebsitesJson.process();

    const { rows } = appsAndWebsitesJson.table;

    const expectedData: [string, number, string, string, number][] = [
      ["Laka", 0, "10257982978220242", "removed", 0],

      ["Risk: Global Domination", 0, "10245660567714528", "removed", 0],

      ["ROUVY", 0, "10536167025774856", "removed", 0],
    ];

    expect(rows.length).toEqual(expectedData.length);

    for (let i = 0; i < expectedData.length; i++) {
      expect(rows[i].name).toEqual(new TextTableValue(expectedData[i][0]));
      expect(rows[i].date_added).toEqual(
        new DateTableValue(expectedData[i][1])
      );
      expect(rows[i].user_app_scoped_id).toEqual(
        new TextTableValue(expectedData[i][2])
      );
      expect(rows[i].category).toEqual(new TextTableValue(expectedData[i][3]));
      expect(rows[i].date_removed).toEqual(
        new DateTableValue(expectedData[i][4])
      );
    }
  });
});
