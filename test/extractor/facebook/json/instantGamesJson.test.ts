import { instantGamesJson } from "../../../../src/extractor/facebook/json/instantGamesJson";
import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Instant Games (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_gaming/instant_games.json"
    );

    instantGamesJson.setJsonDocument(data);
    instantGamesJson.process();

    const { rows } = instantGamesJson.table;

    const expectedValues = [
      {
        name: "WOW",
        added_timestamp: 1558892442,
        user_app_scoped_id: 1960211210680967,
        category: "inactive",
      },
      {
        name: "OMG",
        added_timestamp: 1558810325,
        user_app_scoped_id: 2413874421973740,
        category: "inactive",
      },
      {
        name: "Nametests",
        added_timestamp: 1558223963,
        user_app_scoped_id: 2100802603320911,
        category: "inactive",
      },
    ];

    expect(rows.length).toEqual(10);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].game_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].date_added).toEqual(
        new DateTableValue(expectedValue.added_timestamp)
      );
      expect(rows[index].user_app_scoped_id).toEqual(
        new IntegerTableValue(expectedValue.user_app_scoped_id)
      );
      expect(rows[index].category).toEqual(
        new TextTableValue(expectedValue.category)
      );
    });
  });
});
