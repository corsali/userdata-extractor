import { yourGroupMembershipActivityJson } from "../../../../src/extractor/facebook/json/yourGroupMembershipActivityJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Group Membership Activity (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/groups/your_group_membership_activity.json"
    );

    yourGroupMembershipActivityJson.setJsonDocument(data);
    yourGroupMembershipActivityJson.process();

    const { rows } = yourGroupMembershipActivityJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].group_name).toEqual(new TextTableValue("Team3R"));
    expect(rows[0].activity_date).toEqual(new DateTableValue(1601921829));
    expect(rows[0].activity_title).toEqual(
      new TextTableValue("You became a member of Team3R.")
    );
    expect(rows[1].group_name).toEqual(
      new TextTableValue("Living in Bratislava")
    );
    expect(rows[1].activity_date).toEqual(new DateTableValue(1616820513));
    expect(rows[1].activity_title).toEqual(
      new TextTableValue("You stopped being a member of Living in Bratislava.")
    );
  });
});
