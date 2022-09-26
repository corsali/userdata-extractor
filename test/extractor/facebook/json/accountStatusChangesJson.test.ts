import { accountStatusChangesJson } from "../../../../src/extractor/facebook/json/accountStatusChangesJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Status Changes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/account_status_changes.json"
    );

    accountStatusChangesJson.setJsonDocument(data);
    accountStatusChangesJson.process();

    const { rows } = accountStatusChangesJson.table;

    expect(rows.length).toEqual(18);
    expect(rows[0].status_change).toEqual(
      new TextTableValue("Account reactivated")
    );
    expect(rows[0].date_changed).toEqual(new DateTableValue(1505049656));
    expect(rows[2].status_change).toEqual(
      new TextTableValue("Account reactivated")
    );
    expect(rows[2].date_changed).toEqual(new DateTableValue(1501303413));
    expect(rows[3].status_change).toEqual(
      new TextTableValue("Account deactivated")
    );
    expect(rows[3].date_changed).toEqual(new DateTableValue(1501302960));
  });
});
