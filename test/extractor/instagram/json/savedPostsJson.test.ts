/* eslint-disable no-restricted-syntax */
import { savedPostsJson } from "../../../../src/extractor/instagram/json/savedPostsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Saved Posts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/saved/saved_posts.json"
    );

    savedPostsJson.setJsonDocument(data);
    savedPostsJson.process();

    const { rows } = savedPostsJson.table;

    expect(rows.length).toEqual(267);

    expect(rows[0].post_url).toEqual(
      new UrlTableValue("https://www.instagram.com/tv/Cd5GO_ohREt/")
    );
    expect(rows[0].post_username).toEqual(new TextTableValue("studio_round"));
    expect(rows[0].date_saved).toEqual(new DateTableValue(1653784972));
  });
});
