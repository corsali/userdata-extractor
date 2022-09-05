import { yourEventResponsesJson } from "../../../../src/extractor/facebook/json/yourEventResponsesJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Event Responses (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/events/your_event_responses.json"
    );

    yourEventResponsesJson.setJsonDocument(data);
    yourEventResponsesJson.process();

    const { rows } = yourEventResponsesJson.table;

    expect(rows.length).toEqual(5);

    expect(rows[0].event_name).toEqual(
      new TextTableValue("Stourport Outdoor Circuit Session")
    );
    expect(rows[0].date_start).toEqual(new DateTableValue(1557943200));
    expect(rows[0].date_end).toEqual(new DateTableValue(0));
    expect(rows[0].your_response).toEqual(new TextTableValue("joined"));
    expect(rows[0].place_name).toEqual(new TextTableValue(""));
    expect(rows[0].place_address).toEqual(new TextTableValue(""));
    expect(rows[0].latitude).toEqual(new FloatTableValue(""));
    expect(rows[0].longitude).toEqual(new FloatTableValue(""));
    expect(rows[0].description).toEqual(new TextTableValue(""));
    expect(rows[0].date_created).toEqual(new DateTableValue(0));
    expect(rows[1].event_name).toEqual(new TextTableValue("Chill out"));
    expect(rows[1].date_start).toEqual(new DateTableValue(1395856800));
    expect(rows[1].date_end).toEqual(new DateTableValue(0));
    expect(rows[1].your_response).toEqual(new TextTableValue("joined"));
    expect(rows[1].place_name).toEqual(
      new TextTableValue("Slovak Pub, Bratislava")
    );
    expect(rows[1].place_address).toEqual(
      new TextTableValue("Obchodn\u00c3\u00a1 62, 811 06 Bratislava, Slovakia")
    );
    expect(rows[1].latitude).toEqual(new FloatTableValue(48.148087086822));
    expect(rows[1].longitude).toEqual(new FloatTableValue(17.111758589745));
    expect(rows[1].description).toEqual(new TextTableValue(""));
    expect(rows[1].date_created).toEqual(new DateTableValue(1395652911));
    expect(rows[3].event_name).toEqual(
      new TextTableValue("Boardman Performance Centre Tour")
    );
    expect(rows[3].date_start).toEqual(new DateTableValue(1570870800));
    expect(rows[3].date_end).toEqual(new DateTableValue(1570896000));
    expect(rows[3].your_response).toEqual(new TextTableValue("declined"));
  });
});
