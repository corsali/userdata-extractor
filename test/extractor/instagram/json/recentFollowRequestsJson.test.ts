import { recentFollowRequestsJson } from "../../../../src/extractor/instagram/json/recentFollowRequestsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recent Follow Requests (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/recent_follow_requests.json"
    );

    recentFollowRequestsJson.setJsonDocument(data);
    recentFollowRequestsJson.process();

    const { rows } = recentFollowRequestsJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/vrwolpaw")
    );
    expect(rows[0].name).toEqual(new TextTableValue("vrwolpaw"));
    expect(rows[0].date_followed).toEqual(new DateTableValue(1654462641000));
    expect(rows[1].name).toEqual(new TextTableValue("gennyesberg"));
  });
});
