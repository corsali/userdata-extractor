import { loginsAndLogoutsJson } from "../../../../src/extractor/facebook/json/loginsAndLogoutsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Logins and Logouts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/logins_and_logouts.json"
    );

    loginsAndLogoutsJson.setJsonDocument(data);
    loginsAndLogoutsJson.process();

    const { rows } = loginsAndLogoutsJson.table;

    const expectedValues = [
      {
        action: "Login",
        timestamp: 1661325904,
        site: "www.facebook.com",
        ip_address: "24.48.125.10",
      },
      {
        action: "Login",
        timestamp: 1661324761,
        site: "www.facebook.com",
        ip_address: "24.48.125.10",
      },
      {
        action: "Login",
        timestamp: 1661324751,
        site: "www.facebook.com",
        ip_address: "24.48.125.10",
      },
      {
        action: "Log out",
        timestamp: 1661324631,
        site: "m.facebook.com",
        ip_address: "24.48.125.10",
      },
      {
        action: "Login",
        timestamp: 1603812826,
        site: "www.facebook.com",
        ip_address: "22ed:1bf:94d1:5a00:5529:149e:c1aa:94a1",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].action).toEqual(
        new TextTableValue(expectedValue.action)
      );
      expect(rows[index].date_activity_occurred).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
      expect(rows[index].ip_address).toEqual(
        new TextTableValue(expectedValue.ip_address)
      );
      expect(rows[index].site_name).toEqual(
        new TextTableValue(expectedValue.site)
      );
    });
  });
});
