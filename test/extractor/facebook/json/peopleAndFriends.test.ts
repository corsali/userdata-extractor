import { peopleAndFriendsJson } from "../../../../src/extractor/facebook/json/peopleAndFriendsJson";
import { TextTableValue, UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("People and Friends (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/activity_messages/people_and_friends.json"
    );

    peopleAndFriendsJson.setJsonDocument(data);
    peopleAndFriendsJson.process();

    const { rows } = peopleAndFriendsJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].person_name).toEqual(new TextTableValue("Jack Sparrow"));
    expect(rows[0].person_url).toEqual(
      new UrlTableValue("https://www.facebook.com/jack.sparrow")
    );
    expect(rows[1].person_name).toEqual(new TextTableValue("Ben Burton"));
    expect(rows[1].person_url).toEqual(
      new UrlTableValue("https://www.facebook.com/bentburton")
    );
  });
});
