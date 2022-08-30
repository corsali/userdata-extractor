/* eslint-disable no-restricted-syntax */
import { followingJson } from "../../../../src/extractor/instagram/json/followingJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Following (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/following.json"
    );

    followingJson.setJsonDocument(data);
    followingJson.process();

    const { rows } = followingJson.table;

    expect(rows.length).toEqual(7);
    expect(rows[1].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/narcitycanada")
    );
    expect(rows[1].name).toEqual(new TextTableValue("narcitycanada"));
    expect(rows[1].date_followed).toEqual(new DateTableValue(1599325604));
    expect(rows[5].name).toEqual(new TextTableValue("automaticlabs"));
    expect(rows[6].date_followed).toEqual(new DateTableValue(1463111009));
  });
});
