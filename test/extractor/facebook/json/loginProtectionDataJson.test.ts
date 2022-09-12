import { loginProtectionDataJson } from "../../../../src/extractor/facebook/json/loginProtectionDataJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Login Protection Data (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/login_protection_data.json"
    );

    loginProtectionDataJson.setJsonDocument(data);
    loginProtectionDataJson.process();

    const { rows } = loginProtectionDataJson.table;

    expect(rows.length).toEqual(4);
    expect(rows[0].activity_name).toEqual(
      new TextTableValue("Cookie: hSv4********************")
    );
    expect(rows[0].date_session_created).toEqual(
      new DateTableValue(1660431242)
    );
    expect(rows[0].date_session_updated).toEqual(
      new DateTableValue(1661773213)
    );
    expect(rows[0].ip_address).toEqual(new TextTableValue(""));
    expect(rows[1].activity_name).toEqual(
      new TextTableValue("IP Address: 51.219.86.162")
    );
    expect(rows[1].date_session_created).toEqual(
      new DateTableValue(1661773213)
    );
    expect(rows[1].date_session_updated).toEqual(new DateTableValue(0));
    expect(rows[1].ip_address).toEqual(new TextTableValue("51.219.86.162"));
  });
});
