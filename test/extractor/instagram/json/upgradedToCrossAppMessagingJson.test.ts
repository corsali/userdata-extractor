import { upgradedToCrossAppMessagingJson } from "../../../../src/extractor/instagram/json/upgradedToCrossAppMessagingJson";
import { BoolTableValue, DateTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Upgraded to Cross-App Messaging (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/comments_settings/use_cross-app_messaging.json"
    );

    upgradedToCrossAppMessagingJson.setJsonDocument(data);
    upgradedToCrossAppMessagingJson.process();

    const { rows } = upgradedToCrossAppMessagingJson.table;
    const row = rows[0];

    expect(row.upgraded).toEqual(new BoolTableValue(true));
    expect(row.timeUpgraded).toEqual(new DateTableValue(1611115515));
  });
});
