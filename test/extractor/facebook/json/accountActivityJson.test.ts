import { accountActivityJson } from "../../../../src/extractor/facebook/json/accountActivityJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Activity (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/account_activity.json"
    );

    accountActivityJson.setJsonDocument(data);
    accountActivityJson.process();

    const { rows } = accountActivityJson.table;

    const expectedValues = [
      {
        action: "Session updated",
        timestamp: 1661925800,
        ip_address: "45.67.90.216",
        user_agent:
          "Mozilla/5.0 (Linux; Android 11; HD1903) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36 [FBAN/LiteForWeb;FBBV/1957;FBAV/318.0.0.2.105;FBDV/unknown;FBLC/en_US;FBNG/WIFI;FBMNT/NOT_METERED;FBDM/{density=2.8125}]",
        datr_cookie: "qPkO********************",
        city: "Bratislava",
        region: "Bratislava Region",
        country: "SK",
        site_name: "www.facebook.com",
      },
      {
        action: "Login",
        timestamp: 1568310861,
        ip_address: "23.161.135.185",
        user_agent:
          "Mozilla/5.0 (Linux; Android 9; ONEPLUS A5010 Build/PKQ1.180716.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.73 Mobile Safari/537.36",
        datr_cookie: "PYZ6********************",
        city: "Churchdown",
        region: "England",
        country: "GB",
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
      expect(rows[index].user_agent).toEqual(
        new TextTableValue(expectedValue.user_agent)
      );
      expect(rows[index].cookie).toEqual(
        new TextTableValue(expectedValue.datr_cookie)
      );
      expect(rows[index].city).toEqual(new TextTableValue(expectedValue.city));
      expect(rows[index].region).toEqual(
        new TextTableValue(expectedValue.region)
      );
      expect(rows[index].country).toEqual(
        new TextTableValue(expectedValue.country)
      );
      expect(rows[index].site_name).toEqual(
        new TextTableValue(expectedValue.site_name ?? "")
      );
    });
  });
});
