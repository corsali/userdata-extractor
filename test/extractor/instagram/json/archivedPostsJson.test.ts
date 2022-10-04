import { archivedPostsJson } from "../../../../src/extractor/instagram/json/archivedPostsJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Archived Posts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/content/archived_posts.json"
    );

    archivedPostsJson.setJsonDocument(data);
    archivedPostsJson.process();

    const { rows } = archivedPostsJson.table;

    expect(rows.length).toEqual(6);
    expect(rows[0].title).toEqual(
      new TextTableValue(
        "Nothing for sale, just want to show off my little living room display \u00f0\u009f\u00a5\u00b0\u00f0\u009f\u00a5\u00b0\u00f0\u009f\u00a5\u00b0"
      )
    );
    expect(rows[0].date_posted).toEqual(new DateTableValue(1615673962));
    expect(rows[0].media).toEqual(
      new JsonTableValue([
        {
          uri: "media/archived_posts/202103/160021250_1402483460086170_5955510655975131493_n_17874489053210800.jpg",
          creation_timestamp: 1615673962,
          title: "",
        },
        {
          uri: "media/archived_posts/202103/160348708_256037789498984_6026780188491066495_n_17904178825756967.jpg",
          creation_timestamp: 1615673962,
          title: "",
        },
        {
          uri: "media/archived_posts/202103/159956811_268205028104651_4342895521176121810_n_18152659963189910.jpg",
          creation_timestamp: 1615673962,
          title: "",
        },
      ])
    );
    expect(rows[1].title).toEqual(
      new TextTableValue(
        "The perfect beach/park companion \u00f0\u009f\u008f\u0096 \u00e2\u0098\u0095\u00ef\u00b8\u008f \u00f0\u009f\u008d\u00b7 \n\nVintage Thermos: $15"
      )
    );
    expect(rows[1].date_posted).toEqual(new DateTableValue(1613838250));
    expect(rows[1].media).toEqual(
      new JsonTableValue([
        {
          uri: "media/archived_posts/202102/151257485_115202747230500_176494184687181028_n_17926569799493423.jpg",
          creation_timestamp: 1613838250,
          media_metadata: {
            photo_metadata: {
              exif_data: [
                {
                  latitude: 37.8029,
                  longitude: -122.2721,
                },
                {
                  scene_capture_type: "standard",
                  device_id: "E8279BFE-8239-4F3A-AA2C-144FA145B71F",
                  camera_position: "unknown",
                  source_type: "library",
                },
              ],
            },
          },
          title:
            "The perfect beach/park companion \u00f0\u009f\u008f\u0096 \u00e2\u0098\u0095\u00ef\u00b8\u008f \u00f0\u009f\u008d\u00b7 \n\nVintage Thermos: $15",
        },
      ])
    );
  });
});
