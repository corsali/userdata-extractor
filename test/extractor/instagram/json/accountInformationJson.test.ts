import { accountInformationJson } from "../../../../src/extractor/instagram/json/accountInformationJson";
import {
    BoolTableValue,
    DateTableValue,
    EmailTableValue,
    PhoneNumberValue,
    TextTableValue,
    UrlTableValue,
  } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/account_information/account_information.json"
    );

    accountInformationJson.loadJson(data);
    accountInformationJson.process();

    const { rows } = accountInformationJson.table;
    const row = rows[0];

    expect(row.contact_syncing).toEqual(new BoolTableValue("true"));
    expect(row.first_close_friends_story_time).toEqual(new DateTableValue(0));
    expect(row.first_country_code).toEqual(new TextTableValue("US"));
    expect(row.first_story_time).toEqual(new DateTableValue(1609536453000));
    expect(row.has_shared_live_video).toEqual(new BoolTableValue("false"));
    expect(row.last_login).toEqual(new DateTableValue(1656697737000));
    expect(row.last_logout).toEqual(new DateTableValue(1651723282000));
    expect(row.last_story_time).toEqual(new DateTableValue(1655778516000));
  });
});
