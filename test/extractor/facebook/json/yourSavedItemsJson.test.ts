import { yourSavedItemsJson } from "../../../../src/extractor/facebook/json/yourSavedItemsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Saved Items (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/saved_items_and_collections/your_saved_items.json"
    );

    yourSavedItemsJson.setJsonDocument(data);
    yourSavedItemsJson.process();

    const { rows } = yourSavedItemsJson.table;

    expect(rows.length).toEqual(6);

    expect(rows[0].item_title).toEqual(
      new TextTableValue("Ashley Lynn saved a link.")
    );
    expect(rows[0].date_saved).toEqual(new DateTableValue(1443887907));
    expect(rows[0].ext_data_name).toEqual(
      new TextTableValue(
        "http://www.jackjack.sk/wp-content/uploads/2015/10/18-recording.mp3"
      )
    );
    expect(rows[0].ext_data_url).toEqual(
      new UrlTableValue(
        "http://www.jackjack.sk/wp-content/uploads/2015/10/18-recording.mp3"
      )
    );
    expect(rows[0].ext_data_source).toEqual(new TextTableValue(""));
    expect(rows[1].item_title).toEqual(
      new TextTableValue("Ashley Lynn saved Jack Gartsy's post.")
    );
    expect(rows[1].date_saved).toEqual(new DateTableValue(1528704061));
    expect(rows[1].ext_data_name).toEqual(new TextTableValue(""));
    expect(rows[1].ext_data_url).toEqual(new UrlTableValue(""));
    expect(rows[1].ext_data_source).toEqual(new TextTableValue(""));
    expect(rows[5].item_title).toEqual(
      new TextTableValue("Ashley Lynn saved a link from Heidi Kelly's post.")
    );
    expect(rows[5].date_saved).toEqual(new DateTableValue(1567681638));
    expect(rows[5].ext_data_name).toEqual(
      new TextTableValue("200k to Stratford on Avon")
    );
    expect(rows[5].ext_data_url).toEqual(new UrlTableValue("ridewithgps.com"));
    expect(rows[5].ext_data_source).toEqual(
      new TextTableValue("https://ridewithgps.com/routes/30795884")
    );
  });
});
