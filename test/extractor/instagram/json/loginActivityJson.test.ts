import { loginActivityJson } from "../../../../src/extractor/instagram/json/loginActivityJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Login Activity (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/login_and_account_creation/login_activity.json"
    );

    loginActivityJson.loadJson(data);
    loginActivityJson.process();

    const { rows } = loginActivityJson.table;
    const login = rows[0];

    expect(rows.length).toEqual(4);

    expect(login.cookie_name).toEqual(
      new TextTableValue("*************************aBc")
    );
    expect(login.ip_address).toEqual(new TextTableValue("8.8.8.8"));
    expect(login.language_code).toEqual(new TextTableValue("en"));
    expect(login.time).toEqual(new DateTableValue(1656697737));
    expect(login.user_agent).toEqual(
      new TextTableValue(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
      )
    );
  });
});
