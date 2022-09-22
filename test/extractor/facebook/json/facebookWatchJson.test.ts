import { facebookWatchJson } from "../../../../src/extractor/facebook/json/facebookWatchJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Facebook Watch (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/preferences/facebook_watch.json"
    );

    facebookWatchJson.setJsonDocument(data);
    facebookWatchJson.process();

    const { rows } = facebookWatchJson.table;

    const expectedValues = [
      {
        video_title: "Disruptive man removed from a flight",
        user_action: "See Less",
        action_time: 1645045140,
        feedback_collection: "",
      },
      {
        video_title: "",
        user_action: "See Less",
        action_time: 1632951360,
        feedback_collection: "",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].video_title).toEqual(
        new TextTableValue(expectedValue.video_title)
      );
      expect(rows[index].user_action).toEqual(
        new TextTableValue(expectedValue.user_action)
      );
      expect(rows[index].action_date).toEqual(
        new DateTableValue(expectedValue.action_time)
      );
      expect(rows[index].feedback_collection).toEqual(
        new TextTableValue(expectedValue.feedback_collection)
      );
    });
  });
});
