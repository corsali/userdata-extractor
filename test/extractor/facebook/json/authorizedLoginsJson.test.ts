import { authorizedLoginsJson } from "../../../../src/extractor/facebook/json/authorizedLoginsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Status Changes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/authorized_logins.json"
    );

    authorizedLoginsJson.setJsonDocument(data);
    authorizedLoginsJson.process();

    const { rows } = authorizedLoginsJson.table;

    const firstExpectedValues = [
      {
        name: "Facebook Messenger for Android on moto g stylus 5G",
        created_timestamp: 1649948485,
        updated_timestamp: 1650766563,
        ip_address: "2607:fb91:1f00:4dc2:2cc1:e6ff:fe7b:4e20",
        user_agent:
          "[FBAN/FB4A;FBAV/360.0.0.30.113;FBBV/359953993;FBDM/{density=2.5,width=1080,height=2177};FBLC/en_US;FBRV/362221362;FBCR/Metro by T-Mobile;FBMF/motorola;FBBD/motorola;FBPN/com.facebook.katana;FBDV/moto g stylus 5G;FBSV/11;FBOP/1;FBCA/arm64-v8a:;]",
        datr_cookie: "_JYRYgjQtNlvfmhSFlj7padN",
      },
      {
        name: "Chrome on Motorola Moto G Stylus 5G",
        created_timestamp: 1649981045,
        ip_address: "2607:fb91:1f89:971c:76:98ff:fe32:d052",
        user_agent:
          "Mozilla/5.0 (Linux; Android 11; moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.58 Mobile Safari/537.36",
        datr_cookie: "QrZYYsO7oLON-9qgHr6Mj2Cs",
      },
    ];

    expect(rows.length).toEqual(5);
    firstExpectedValues.forEach((expectedValue, index) => {
      expect(rows[index].action_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].date_created).toEqual(
        new DateTableValue(expectedValue.created_timestamp)
      );
      expect(rows[index].date_updated).toEqual(
        new DateTableValue(expectedValue.updated_timestamp ?? "")
      );
      expect(rows[index].ip_address).toEqual(
        new TextTableValue(expectedValue.ip_address)
      );
      expect(rows[index].user_agent).toEqual(
        new TextTableValue(expectedValue.user_agent)
      );
      expect(rows[index].datr_cookie).toEqual(
        new TextTableValue(expectedValue.datr_cookie)
      );
    });
  });
});
