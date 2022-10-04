import { yourUncategorizedPhotosJson } from "../../../../src/extractor/facebook/json/yourUncategorizedPhotosJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Uncategorized Photos (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/posts/your_uncategorized_photos.json"
    );

    yourUncategorizedPhotosJson.setJsonDocument(data);
    yourUncategorizedPhotosJson.process();

    const { rows } = yourUncategorizedPhotosJson.table;

    expect(rows.length).toEqual(4);
    expect(rows[3].uri).toEqual(
      new UrlTableValue(
        "posts/media/your_posts/25487385_157109418382158_2139272141942671464_o_157109418382158.jpg"
      )
    );
    expect(rows[3].date_created).toEqual(new DateTableValue(1513569866));
    expect(rows[3].media_metadata).toEqual(
      new JsonTableValue({
        photo_metadata: {
          exif_data: [
            {
              upload_ip: "172.56.38.126",
              taken_timestamp: 1513566082,
            },
          ],
        },
      })
    );
    expect(rows[3].description).toEqual(
      new TextTableValue("Well lets have it what's yalls l least favorite one")
    );
  });
});
