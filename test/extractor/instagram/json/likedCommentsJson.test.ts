/* eslint-disable no-restricted-syntax */
import { likedCommentsJson } from "../../../../src/extractor/instagram/json/likedCommentsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Liked Comments (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/likes/liked_comments.json"
    );

    likedCommentsJson.setJsonDocument(data);
    likedCommentsJson.process();

    const { rows } = likedCommentsJson.table;

    expect(rows.length).toEqual(215);

    expect(rows[0].title).toEqual(new TextTableValue("johndoe"));
    expect(rows[0].comment_url).toEqual(
      new UrlTableValue("https://www.instagram.com/tv/CdbvWZODF1s/")
    );
    expect(rows[0].action).toEqual(
      new TextTableValue("\u00f0\u009f\u0091\u008d")
    );
    expect(rows[0].date_liked).toEqual(new DateTableValue(1653785185));
    expect(rows[214].title).toEqual(new TextTableValue("fosdave"));
    expect(rows[214].comment_url).toEqual(
      new UrlTableValue("https://www.instagram.com/p/BN0VNaoA0cP/")
    );
    expect(rows[214].action).toEqual(
      new TextTableValue("\u00f0\u009f\u0091\u008d")
    );
    expect(rows[214].date_liked).toEqual(new DateTableValue(1481415043));
  });
});
