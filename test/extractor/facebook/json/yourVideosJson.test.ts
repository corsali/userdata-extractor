import { yourVideosJson } from "../../../../src/extractor/facebook/json/yourVideosJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Videos (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/posts/your_videos.json"
    );

    yourVideosJson.setJsonDocument(data);
    yourVideosJson.process();

    const { rows } = yourVideosJson.table;

    expect(rows.length).toEqual(3);
    expect(rows[0].video_title).toEqual(
      new TextTableValue("Bean's Year in Review Video")
    );
    expect(rows[0].video_uri).toEqual(
      new UrlTableValue(
        "posts/media/videos/24644730_374008246408029_213105368010588160_n_151791002247333.mp4"
      )
    );
    expect(rows[0].date_created).toEqual(new DateTableValue(1512618538));
    expect(rows[0].media_metadata).toEqual(
      new JsonTableValue({
        video_metadata: {
          exif_data: [
            {
              upload_ip: "2401:db00:2050:50fa:face:0:95:0",
              upload_timestamp: 0,
            },
          ],
        },
      })
    );
    expect(rows[0].thumbnail_uri).toEqual(
      new UrlTableValue(
        "https://interncache-ftw.fbcdn.net/v/t15.5256-10/24280331_150783989014701_3968783603818561536_n.jpg?stp=dst-jpg_p480x480_q65&ccb=1-5&_nc_sid=73a6a0&efg=eyJ1cmxnZW4iOiJwaHBfdXJsZ2VuX2NsaWVudC9pbW9nZW46RFlJTWVkaWFVdGlscyJ9&_nc_ad=z-m&_nc_cid=0&_nc_ht=interncache-ftw&oh=00_AT-Kpn1YNSihlW1GhDhnr4qgMPCySM-xMjZPLHr3D4TdNQ&oe=62696791"
      )
    );
    expect(rows[0].description).toEqual(new TextTableValue(""));
    expect(rows[1].video_title).toEqual(new TextTableValue(""));
    expect(rows[1].video_uri).toEqual(
      new UrlTableValue(
        "posts/media/videos/36283663_191313938246320_9123413038181908480_n_252461968846902.mp4"
      )
    );
    expect(rows[1].date_created).toEqual(new DateTableValue(1530288214));
    expect(rows[1].media_metadata).toEqual(
      new JsonTableValue({
        video_metadata: {
          exif_data: [
            {
              upload_ip: "172.56.38.103",
              upload_timestamp: 0,
            },
          ],
        },
      })
    );
    expect(rows[1].thumbnail_uri).toEqual(
      new UrlTableValue(
        "https://interncache-ftw.fbcdn.net/v/t15.5256-10/34352484_252482795511486_8335634813968973824_n.jpg?stp=dst-jpg_p480x480_q65&ccb=1-5&_nc_sid=73a6a0&efg=eyJ1cmxnZW4iOiJwaHBfdXJsZ2VuX2NsaWVudC9pbW9nZW46RFlJTWVkaWFVdGlscyJ9&_nc_ad=z-m&_nc_cid=0&_nc_ht=interncache-ftw&oh=00_AT_4tJEFJ9OEa1EbLkCwACcO9-5v_IZQ5OI0ApWtnSkA4w&oe=62695B7B"
      )
    );
    expect(rows[1].description).toEqual(
      new TextTableValue("boyfriend and his nephew argue over your *")
    );
  });
});
