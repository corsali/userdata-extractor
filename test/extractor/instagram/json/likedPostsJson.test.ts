/* eslint-disable no-restricted-syntax */
import { likedPostsJson } from "../../../../src/extractor/instagram/json/likedPostsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Liked Posts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/likes/liked_posts.json"
    );

    likedPostsJson.setJsonDocument(data);
    likedPostsJson.process();

    const { rows } = likedPostsJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.post_url).toEqual(
      new UrlTableValue("https://www.instagram.com/p/Bsd-UCEl4Gh/")
    );
    expect(row.action).toEqual(new TextTableValue("\u00f0\u009f\u0091\u008d"));
    expect(row.date_liked).toEqual(new DateTableValue(1559747310));
  });
});
