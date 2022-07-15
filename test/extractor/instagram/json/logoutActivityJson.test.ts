import { logoutActivityJson } from "../../../../src/extractor/instagram/json/logoutActivityJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Logout Activity (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/login_and_account_creation/logout_activity.json"
    );

    logoutActivityJson.loadJson(data);
    logoutActivityJson.process();

    const { rows } = logoutActivityJson.table;
    const login = rows[0];

    expect(rows.length).toEqual(1);

    expect(login.cookie_name).toEqual(
      new TextTableValue("*************************HAL")
    );
    expect(login.ip_address).toEqual(new TextTableValue("1.1.1.1"));
    expect(login.language_code).toEqual(new TextTableValue("en"));
    expect(login.time).toEqual(new DateTableValue(1651723282));
    expect(login.user_agent).toEqual(
      new TextTableValue(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
      )
    );
  });
});
