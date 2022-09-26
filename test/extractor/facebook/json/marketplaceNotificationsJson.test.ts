import { marketplaceNotificationsJson } from "../../../../src/extractor/facebook/json/marketplaceNotificationsJson";
import { IntegerTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Events (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_marketplace/marketplace_notifications.json"
    );

    marketplaceNotificationsJson.setJsonDocument(data);
    marketplaceNotificationsJson.process();

    const { rows } = marketplaceNotificationsJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].sent_last_28_days).toEqual(new IntegerTableValue(9));
    expect(rows[0].opened_last_28_days).toEqual(new IntegerTableValue(0));
    expect(rows[0].dismissed_last_28_days).toEqual(new IntegerTableValue(0));
  });
});
