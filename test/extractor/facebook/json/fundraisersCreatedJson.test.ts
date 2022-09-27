import { fundraiserCreatedJson } from "../../../../src/extractor/facebook/json/fundraisersCreatedJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Fundraisers Created (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/fundraisers/fundraisers_created.json"
    );

    fundraiserCreatedJson.setJsonDocument(data);
    fundraiserCreatedJson.process();

    const { rows } = fundraiserCreatedJson.table;

    const expectedValue = {
      timestamp: 1580048560,
      title: "Georgianne's Pets/Animal Fundraiser",
      start_timestamp: 1580048403,
      end_timestamp: 1581310740,
      goal_amount: "$250.00",
      raised_amount: "$0.00",
      donated_amount: "$0.00",
      action_title: "Georgianne Cleone Gotko created a fundraiser.",
    };
    expect(rows.length).toEqual(1);
    expect(rows[0].fundraiser_title).toEqual(
      new TextTableValue(expectedValue.title)
    );
    expect(rows[0].date_started).toEqual(
      new DateTableValue(expectedValue.start_timestamp)
    );
    expect(rows[0].date_ended).toEqual(
      new DateTableValue(expectedValue.end_timestamp)
    );
    expect(rows[0].date_created).toEqual(
      new DateTableValue(expectedValue.timestamp)
    );
    expect(rows[0].goal_amount).toEqual(
      new TextTableValue(expectedValue.goal_amount)
    );
    expect(rows[0].raised_amount).toEqual(
      new TextTableValue(expectedValue.raised_amount)
    );
    expect(rows[0].donated_amount).toEqual(
      new TextTableValue(expectedValue.donated_amount)
    );
    expect(rows[0].action_title).toEqual(
      new TextTableValue(expectedValue.action_title)
    );
  });
});
