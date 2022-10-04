import { subscriptionsCsv } from "../../../../src/extractor/youtube/csv/subscriptionsCsv";
import { TextTableValue, UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsText } from "../../../helper";

describe("Subscriptions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText(
      "/csv/youtube/Takeout/YouTube and YouTube Music/subscriptions/subscriptions.csv"
    );

    subscriptionsCsv.fileContents = data;

    subscriptionsCsv.process();
    const { rows } = subscriptionsCsv.table;

    expect(rows.length).toEqual(5);
    expect(rows[0].channel_id).toEqual(
      new TextTableValue("UC8g_orLJFFBJ7tIVREZbAcw")
    );
    expect(rows[0].channel_url).toEqual(
      new UrlTableValue(
        "http://www.youtube.com/channel/UC8g_orLJFFBJ7tIVREZbAcw"
      )
    );
    expect(rows[0].channel_title).toEqual(new TextTableValue("1BelovedSon"));
    expect(rows[4].channel_id).toEqual(
      new TextTableValue("UCuTaETsuCOkJ0H_GAztWt0Q")
    );
    expect(rows[4].channel_url).toEqual(
      new UrlTableValue(
        "http://www.youtube.com/channel/UCuTaETsuCOkJ0H_GAztWt0Q"
      )
    );
    expect(rows[4].channel_title).toEqual(
      new TextTableValue("Global Cycling Network")
    );
  });
});
