import { votingLocationJson } from "../../../../src/extractor/facebook/json/votingLocationJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Voting Location (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/voting_location_and_reminders/location.json"
    );

    votingLocationJson.setJsonDocument(data);
    votingLocationJson.process();

    const { rows } = votingLocationJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].voting_location).toEqual(
      new TextTableValue(
        "1197 Florida Ave, Akron, OH 44314-2268, United States"
      )
    );
  });
});
