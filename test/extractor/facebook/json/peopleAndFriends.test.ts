import { peopleAndFriendsJson } from "../../../../src/extractor/facebook/json/peopleAndFriendsJson";
import {
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("People and Friends (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/activity_messages/people_and_friends.json"
    );

    peopleAndFriendsJson.setJsonDocument(data);
    peopleAndFriendsJson.process();

    const { rows } = peopleAndFriendsJson.table;

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
