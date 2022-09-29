import { votingRemindersJson } from "../../../../src/extractor/facebook/json/votingRemindersJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Voting Reminders (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/voting_location_and_reminders/voting_reminders.json"
    );

    votingRemindersJson.setJsonDocument(data);
    votingRemindersJson.process();

    const { rows } = votingRemindersJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].voting_reminders).toEqual(
      new TextTableValue(
        "You're receiving reminders about upcoming elections in your area."
      )
    );
  });
});
