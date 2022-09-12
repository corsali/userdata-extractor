import { groupInteractionsJson } from "../../../../src/extractor/facebook/json/groupInteractionsJson";
import {
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Group Interactions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/activity_messages/group_interactions.json"
    );

    groupInteractionsJson.setJsonDocument(data);
    groupInteractionsJson.process();

    const { rows } = groupInteractionsJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[0].group_name).toEqual(new TextTableValue("Zwift Riders"));
    expect(rows[0].interaction_count).toEqual(new IntegerTableValue(82));
    expect(rows[0].group_url).toEqual(
      new UrlTableValue("https://www.facebook.com/groups/zwiftriders/")
    );
    expect(rows[1].group_name).toEqual(
      new TextTableValue("Global Cycling Network Community")
    );
    expect(rows[1].interaction_count).toEqual(new IntegerTableValue(62));
    expect(rows[1].group_url).toEqual(
      new UrlTableValue("https://www.facebook.com/groups/gcncommunity/")
    );
  });
});
