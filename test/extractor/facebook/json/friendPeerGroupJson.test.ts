import { friendPeerGroupJson } from "../../../../src/extractor/facebook/json/friendPeerGroupJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Friend Peer Group (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/other_logged_information/friend_peer_group.json"
    );

    friendPeerGroupJson.setJsonDocument(data);
    friendPeerGroupJson.process();

    const { rows } = friendPeerGroupJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].group_name).toEqual(
      new TextTableValue("Starting Adult Life")
    );
  });
});
