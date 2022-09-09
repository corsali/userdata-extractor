import { accountPrivacyChangesJson } from "../../../../src/extractor/instagram/json/accountPrivacyChangesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Privacy Changes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/login_and_account_creation/account_privacy_changes.json"
    );

    accountPrivacyChangesJson.setJsonDocument(data);
    accountPrivacyChangesJson.process();

    const { rows } = accountPrivacyChangesJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].change_title).toEqual(
      new TextTableValue("Switched to Private")
    );
    expect(rows[0].date_changed).toEqual(new DateTableValue(1650219244000));
  });
});
