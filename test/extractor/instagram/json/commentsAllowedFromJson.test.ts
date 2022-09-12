import { commentsAllowedFromJson } from "../../../../src/extractor/instagram/json/commentsAllowedFromJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Comments Allowed From (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/comments_settings/comments_allowed_from.json"
    );

    commentsAllowedFromJson.setJsonDocument(data);
    commentsAllowedFromJson.process();

    const { rows } = commentsAllowedFromJson.table;
    const row = rows[0];

    expect(row.comments_allowed_from).toEqual(new TextTableValue("Everyone"));
  });
});
