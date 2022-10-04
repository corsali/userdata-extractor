import { recentlyDeletedContentJson } from "../../../../src/extractor/instagram/json/recentlyDeletedContentJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Deleted Content (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/content/recently_deleted_content.json"
    );

    recentlyDeletedContentJson.setJsonDocument(data);
    recentlyDeletedContentJson.process();

    const { rows } = recentlyDeletedContentJson.table;

    expect(rows.length).toEqual(4);
    expect(rows[0].title).toEqual(new TextTableValue(""));
    expect(rows[0].date_created).toEqual(new DateTableValue(1660011585));
    expect(rows[0].media).toEqual(
      new JsonTableValue([
        {
          uri: "media/recently_deleted/202208/298233121_920660145530249_1822948275797210705_n_18312110221061547.jpg",
          creation_timestamp: 1660011585,
          media_metadata: {
            photo_metadata: {
              exif_data: [
                {
                  device_id: "B6B2DEC9-8863-4333-BD98-67FB53551BEB",
                  camera_position: "unknown",
                  source_type: "feed_reshare",
                },
              ],
            },
          },
          title: "",
        },
      ])
    );
    expect(rows[2].title).toEqual(
      new TextTableValue(
        "If you could have all your data (IG, Spotify, Netflix, tinder, etc) in one place, what would you do with it?"
      )
    );
    expect(rows[2].date_created).toEqual(new DateTableValue(1659125675));
    expect(rows[2].media).toEqual(
      new JsonTableValue([
        {
          uri: "media/recently_deleted/202207/296028857_1142200996381229_3974853689274199245_n_17999743339476214.jpg",
          creation_timestamp: 1659125675,
          media_metadata: {
            photo_metadata: {
              exif_data: [
                {
                  iso: 64,
                  focal_length: "3.99",
                  lens_model: "iPhone 7 back camera 3.99mm f/1.8",
                  software: "15.5",
                  device_id: "B6B2DEC9-8863-4333-BD98-67FB53551BEB",
                  scene_type: 1,
                  camera_position: "back",
                  lens_make: "Apple",
                  date_time_digitized: "2022:07:17 09:33:32",
                  date_time_original: "2022:07:17 09:33:32",
                  source_type: "library",
                  aperture: "1.6959938128383605",
                  shutter_speed: "3.9085073231536303",
                  metering_mode: "5",
                },
              ],
            },
          },
          title:
            "If you could have all your data (IG, Spotify, Netflix, tinder, etc) in one place, what would you do with it?",
        },
      ])
    );
  });
});
