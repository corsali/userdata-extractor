import { friendRequestsReceivedJson } from "../../../../src/extractor/facebook/json/friendRequestsReceivedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Friend Requests Received (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/friends_and_followers/friend_requests_received.json"
    );

    friendRequestsReceivedJson.setJsonDocument(data);
    friendRequestsReceivedJson.process();

    const { rows } = friendRequestsReceivedJson.table;

    expect(rows.length).toEqual(4);

    expect(rows[0].person_name).toEqual(new TextTableValue("Sarah Angelline"));
    expect(rows[0].date_request_received).toEqual(
      new DateTableValue(1660980742)
    );
    expect(rows[2].person_name).toEqual(new TextTableValue("Elizabeth Smith"));
    expect(rows[2].date_request_received).toEqual(
      new DateTableValue(1579766892)
    );
  });
});
