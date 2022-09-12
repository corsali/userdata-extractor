import { ipAddressActivityJson } from "../../../../src/extractor/facebook/json/ipAddressActivityJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("IP Address Activity (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/ip_address_activity.json"
    );

    ipAddressActivityJson.setJsonDocument(data);
    ipAddressActivityJson.process();

    const { rows } = ipAddressActivityJson.table;

    expect(rows.length).toEqual(4);
    expect(rows[0].action).toEqual(new TextTableValue("Login"));
    expect(rows[0].date_activity_occurred).toEqual(
      new DateTableValue(1661324696)
    );
    expect(rows[0].ip_address).toEqual(new TextTableValue("48.14.148.10"));
    expect(rows[0].user_agent).toEqual(
      new TextTableValue(
        "Mozilla/5.0 (Linux; Android 11; HD1903) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36"
      )
    );
  });
});
