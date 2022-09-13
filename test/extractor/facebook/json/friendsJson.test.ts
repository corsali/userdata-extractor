import { friendsJson } from "../../../../src/extractor/facebook/json/friendsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Friends (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/friends_and_followers/friends.json"
    );

    friendsJson.setJsonDocument(data);
    friendsJson.process();

    const { rows } = friendsJson.table;

    expect(rows.length).toEqual(4);

    expect(rows[0].person_name).toEqual(new TextTableValue("Jackie Chan"));
    expect(rows[0].date_befriended).toEqual(new DateTableValue(1638795396));
    expect(rows[2].person_name).toEqual(new TextTableValue("Bob Smith"));
    expect(rows[2].date_befriended).toEqual(new DateTableValue(1613470755));
  });
});
