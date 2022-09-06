import { friendRequestsSentJson } from "../../../../src/extractor/facebook/json/friendRequestsSentJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Friend Requests Sent (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/friends_and_followers/friend_requests_sent.json"
    );

    friendRequestsSentJson.setJsonDocument(data);
    friendRequestsSentJson.process();

    const { rows } = friendRequestsSentJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].person_name).toEqual(new TextTableValue("Aaliyah Stevens"));
    expect(rows[0].date_request_sent).toEqual(new DateTableValue(1658988464));
    expect(rows[1].person_name).toEqual(new TextTableValue("Robert Santos"));
    expect(rows[1].date_request_sent).toEqual(new DateTableValue(1614602988));
  });
});
