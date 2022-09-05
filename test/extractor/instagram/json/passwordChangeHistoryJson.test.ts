/* eslint-disable no-restricted-syntax */
import { passwordChangeHistoryJson } from "../../../../src/extractor/instagram/json/passwordChangeHistoryJson";
import { DateTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Password Change History (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/login_and_account_creation/password_change_activity.json"
    );

    passwordChangeHistoryJson.setJsonDocument(data);
    passwordChangeHistoryJson.process();

    const { rows } = passwordChangeHistoryJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[0].date_changed).toEqual(new DateTableValue(1641270058));
    expect(rows[1].date_changed).toEqual(new DateTableValue(1640026828));
    expect(rows[2].date_changed).toEqual(new DateTableValue(1463170434));
  });
});
