/* eslint-disable no-restricted-syntax */
import { blockedAccountsJson } from "../../../../src/extractor/instagram/json/blockedAccountsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Blocked Accounts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/blocked_accounts.json"
    );

    blockedAccountsJson.setJsonDocument(data);
    blockedAccountsJson.process();

    const { rows } = blockedAccountsJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/ulerexem")
    );
    expect(rows[0].name).toEqual(new TextTableValue("ulerexem"));
    expect(rows[0].date_blocked).toEqual(new DateTableValue(1430304393));
  });
});
