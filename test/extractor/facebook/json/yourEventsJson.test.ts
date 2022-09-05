import { yourEventsJson } from "../../../../src/extractor/facebook/json/yourEventsJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Events (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/events/your_events.json"
    );

    yourEventsJson.setJsonDocument(data);
    yourEventsJson.process();

    const { rows } = yourEventsJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].event_name).toEqual(new TextTableValue("Chill out"));
    expect(rows[0].date_start).toEqual(new DateTableValue(1395856800));
    expect(rows[0].date_end).toEqual(new DateTableValue(0));
    expect(rows[0].place_name).toEqual(
      new TextTableValue("Slovak Pub, Bratislava")
    );
    expect(rows[0].place_address).toEqual(
      new TextTableValue("Obchodn\u00c3\u00a1 62, 811 06 Bratislava, Slovakia")
    );
    expect(rows[0].latitude).toEqual(new FloatTableValue(48.148087086822));
    expect(rows[0].longitude).toEqual(new FloatTableValue(17.111758589745));
    expect(rows[0].description).toEqual(new TextTableValue(""));
    expect(rows[0].date_created).toEqual(new DateTableValue(1395652911));
  });
});
