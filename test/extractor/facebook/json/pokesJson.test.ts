import { pokesJson } from "../../../../src/extractor/facebook/json/pokesJson";
import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Pokes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/other_activity/pokes.json"
    );

    pokesJson.setJsonDocument(data);
    pokesJson.process();

    const { rows } = pokesJson.table;

    const firstExpectedValues = [
      {
        poker: "Jane Doe",
        pokee: "Chris Zufall",
        rank: 0,
        timestamp: 1508186311,
      },
      {
        poker: "Chris Zufall",
        pokee: "Jane Doe",
        rank: 3,
        timestamp: 1508340825,
      },
      {
        poker: "Brian Misner",
        pokee: "Jane Doe",
        rank: 1,
        timestamp: 1511302489,
      },
    ];

    expect(rows.length).toEqual(10);
    firstExpectedValues.forEach((expectedValue, index) => {
      expect(rows[index].poker).toEqual(
        new TextTableValue(expectedValue.poker)
      );
      expect(rows[index].pokee).toEqual(
        new TextTableValue(expectedValue.pokee)
      );
      expect(rows[index].rank).toEqual(
        new IntegerTableValue(expectedValue.rank)
      );
      expect(rows[index].date_poked).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
