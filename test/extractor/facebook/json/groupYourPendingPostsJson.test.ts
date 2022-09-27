import { groupYourPendingPostsJson } from "../../../../src/extractor/facebook/json/groupYourPendingPostsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Pending Posts In Groups (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/groups/your_pending_posts_in_groups.json"
    );

    groupYourPendingPostsJson.setJsonDocument(data);
    groupYourPendingPostsJson.process();

    const { rows } = groupYourPendingPostsJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].post_text).toEqual(
      new TextTableValue("Just thought I'd share this beer I found")
    );
    expect(rows[0].date_posted).toEqual(new DateTableValue(1544052679));
  });
});
