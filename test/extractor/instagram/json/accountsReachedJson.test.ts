/* eslint-disable no-restricted-syntax */
import { accountsReachedJson } from "../../../../src/extractor/instagram/json/accountsReachedJson";
import {
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Accounts reached (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/past_instagram_insights/accounts_reached.json"
    );

    accountsReachedJson.setJsonDocument(data);
    accountsReachedJson.process();

    const { rows } = accountsReachedJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.date_range_from).toEqual(new TextTableValue("Jan 27"));
    expect(row.date_range_to).toEqual(new TextTableValue("Apr 26"));
    expect(row.accounts_reached).toEqual(new IntegerTableValue("1"));
    expect(row.accounts_reached_delta).toEqual(
      new TextTableValue("-- vs Oct 29 - Jan 26")
    );
    expect(row.followers).toEqual(new IntegerTableValue("1"));
    expect(row.non_followers).toEqual(new IntegerTableValue("0"));
    expect(row.impressions).toEqual(new IntegerTableValue("1"));
    expect(row.impressions_delta).toEqual(new TextTableValue("--"));
    expect(row.profile_visits).toEqual(new IntegerTableValue("0"));
    expect(row.profile_visits_delta).toEqual(new TextTableValue("0%"));
    expect(row.email_button_taps).toEqual(new IntegerTableValue("0"));
    expect(row.email_button_taps_delta).toEqual(new TextTableValue("0%"));
  });
});
