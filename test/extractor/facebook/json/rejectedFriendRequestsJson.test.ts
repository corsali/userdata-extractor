import { rejectedFriendRequestsJson } from "../../../../src/extractor/facebook/json/rejectedFriendRequestsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Rejected Friend Requests (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/friends_and_followers/rejected_friend_requests.json"
    );

    rejectedFriendRequestsJson.setJsonDocument(data);
    rejectedFriendRequestsJson.process();

    const { rows } = rejectedFriendRequestsJson.table;

    expect(rows.length).toEqual(3);

    expect(rows[0].person_name).toEqual(new TextTableValue("Beth Scott"));
    expect(rows[0].date_rejected).toEqual(new DateTableValue(1648722827));
    expect(rows[1].person_name).toEqual(new TextTableValue("Leah Sanchez"));
    expect(rows[1].date_rejected).toEqual(new DateTableValue(1612441389));
  });
});
