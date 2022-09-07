import { removedFriendsJson } from "../../../../src/extractor/facebook/json/removedFriendsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Removed Friends (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/friends_and_followers/removed_friends.json"
    );

    removedFriendsJson.setJsonDocument(data);
    removedFriendsJson.process();

    const { rows } = removedFriendsJson.table;

    expect(rows.length).toEqual(4);

    expect(rows[0].person_name).toEqual(new TextTableValue("Ryleigh Stuart"));
    expect(rows[0].date_rejected).toEqual(new DateTableValue(1650718659));
    expect(rows[3].person_name).toEqual(new TextTableValue("Peter Clarence"));
    expect(rows[3].date_rejected).toEqual(new DateTableValue(1571894858));
  });
});
