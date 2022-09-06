import { groupCreatorBadgesJson } from "../../../../src/extractor/facebook/json/groupCreatorBadgesJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Group Creator Badges (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/groups/creator_badges.json"
    );

    groupCreatorBadgesJson.setJsonDocument(data);
    groupCreatorBadgesJson.process();

    const { rows } = groupCreatorBadgesJson.table;

    expect(rows.length).toEqual(2);

    // @todo The keys get automatically changed to lower case - need fix?
    expect(rows[0].group_name).toEqual(
      new TextTableValue("Big Events".toLowerCase())
    );
    expect(rows[0].badge).toEqual(new TextTableValue("Admin"));
    expect(rows[1].group_name).toEqual(
      new TextTableValue("Riders".toLowerCase())
    );
    expect(rows[1].badge).toEqual(new TextTableValue("Admin"));
  });
});
