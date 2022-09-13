import { whoYouFollowJson } from "../../../../src/extractor/facebook/json/whoYouFollowJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Who You Follow (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/friends_and_followers/who_you_follow.json"
    );

    whoYouFollowJson.setJsonDocument(data);
    whoYouFollowJson.process();

    const { rows } = whoYouFollowJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[0].person_name).toEqual(new TextTableValue("FIRE production"));
    expect(rows[0].date_followed).toEqual(new DateTableValue(1625632352));
    expect(rows[2].person_name).toEqual(new TextTableValue("BIG Events"));
    expect(rows[2].date_followed).toEqual(new DateTableValue(1598870322));
  });
});
