import { recentlyUnfollowedAccountsJson } from "../../../../src/extractor/instagram/json/recentlyUnfollowedAccountsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Unfollowed Accounts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/recently_unfollowed_accounts.json"
    );

    recentlyUnfollowedAccountsJson.setJsonDocument(data);
    recentlyUnfollowedAccountsJson.process();

    const { rows } = recentlyUnfollowedAccountsJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[0].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/the__dahl__house")
    );
    expect(rows[0].name).toEqual(new TextTableValue("the__dahl__house"));
    expect(rows[0].date_followed).toEqual(new DateTableValue(1657245900));
    expect(rows[2].name).toEqual(new TextTableValue("_okiden"));
  });
});
