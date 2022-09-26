import { yourFacebookActivityHistoryJson } from "../../../../src/extractor/facebook/json/yourFacebookActivityHistoryJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Facebook Activity History (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/your_facebook_activity_history.json"
    );

    yourFacebookActivityHistoryJson.setJsonDocument(data);
    yourFacebookActivityHistoryJson.process();

    const { rows } = yourFacebookActivityHistoryJson.table;

    expect(rows.length).toEqual(190);
    expect(rows[0].date_accessed).toEqual(new DateTableValue(1661809281));
    expect(rows[0].used_app).toEqual(new TextTableValue("Website"));
    expect(rows[46].date_accessed).toEqual(new DateTableValue(1660686081));
    expect(rows[46].used_app).toEqual(new TextTableValue("Facebook app"));
    expect(rows[101].date_accessed).toEqual(new DateTableValue(1656625281000));
    expect(rows[101].used_app).toEqual(new TextTableValue("Mobile web"));
    expect(rows[158].date_accessed).toEqual(new DateTableValue(1659303681000));
    expect(rows[158].used_app).toEqual(new TextTableValue("Facebook Lite"));
  });
});
