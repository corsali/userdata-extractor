import { friendsYouSeeLessJson } from "../../../../src/extractor/facebook/json/friendsYouSeeLessJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Friends You See Less (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/friends_and_followers/friends_you_see_less.json"
    );

    friendsYouSeeLessJson.setJsonDocument(data);
    friendsYouSeeLessJson.process();

    const { rows } = friendsYouSeeLessJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].person_name).toEqual(new TextTableValue("Zyan Coyle"));
    expect(rows[0].action_date).toEqual(new DateTableValue(1511994263));
    expect(rows[0].person_url).toEqual(
      new UrlTableValue("https://www.facebook.com/zyan.coyle")
    );
  });
});
