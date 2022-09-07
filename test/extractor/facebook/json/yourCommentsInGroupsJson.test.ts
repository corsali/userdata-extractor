import { yourCommentsInGroupsJson } from "../../../../src/extractor/facebook/json/yourCommentsInGroupsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Comments In Groups (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/groups/your_comments_in_groups.json"
    );

    yourCommentsInGroupsJson.setJsonDocument(data);
    yourCommentsInGroupsJson.process();

    const { rows } = yourCommentsInGroupsJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[1].group_name).toEqual(new TextTableValue("Zwift Riders"));
    expect(rows[1].date_commented).toEqual(new DateTableValue(1585040889));
    expect(rows[1].comment).toEqual(
      new TextTableValue("...and this is what we call indoor cycling")
    );
    expect(rows[1].comment_title).toEqual(
      new TextTableValue("Carl Ryan commented on Mark Brooks's post.")
    );
  });
});
