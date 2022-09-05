/* eslint-disable no-restricted-syntax */
import { closeFriendsJson } from "../../../../src/extractor/instagram/json/closeFriendsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Close Friends (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/close_friends.json"
    );

    closeFriendsJson.setJsonDocument(data);
    closeFriendsJson.process();

    const { rows } = closeFriendsJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/user12345")
    );
    expect(rows[0].name).toEqual(new TextTableValue("user12345"));
    expect(rows[0].date_befriended).toEqual(new DateTableValue(1648587704));
  });
});
