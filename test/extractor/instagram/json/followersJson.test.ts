/* eslint-disable no-restricted-syntax */
import { followersJson } from "../../../../src/extractor/instagram/json/followersJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Followers (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/followers.json"
    );

    followersJson.setJsonDocument(data);
    followersJson.process();

    const { rows } = followersJson.table;

    expect(rows.length).toEqual(8);
    expect(rows[1].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/ormistonchrista")
    );
    expect(rows[1].name).toEqual(new TextTableValue("ormistonchrista"));
    expect(rows[1].date_followed).toEqual(new DateTableValue(1608241358));
    expect(rows[5].name).toEqual(new TextTableValue("juniorrijo"));
    expect(rows[6].date_followed).toEqual(new DateTableValue(1463111335));
  });
});
