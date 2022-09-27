import { buyerAndSellerRatingsJson } from "../../../../src/extractor/facebook/json/buyerAndSellerRatingsJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Buyer And Seller Ratings (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_marketplace/buyer_and_seller_ratings.json"
    );

    buyerAndSellerRatingsJson.setJsonDocument(data);
    buyerAndSellerRatingsJson.process();

    const { rows } = buyerAndSellerRatingsJson.table;

    expect(rows.length).toEqual(36);
    expect(rows[0].date_rated).toEqual(new DateTableValue(1533838126));
    expect(rows[0].rating_title).toEqual(
      new TextTableValue(
        "Georgianne Cleone Gotko recommended Jim N Mel Delong in marketplace."
      )
    );
    expect(rows[0].item_name).toEqual(
      new TextTableValue("Steel shelving unit")
    );
    expect(rows[0].attachments).toEqual(
      new JsonTableValue([
        {
          data: [
            {
              media: {
                uri: "posts/media/your_posts/38773917_10215021858172447_1117422019357442048_n_10215021858092445.jpg",
                creation_timestamp: 1533661873,
                media_metadata: {
                  photo_metadata: {
                    exif_data: [
                      {
                        upload_ip: "2602:306:bd63:6dc0:a158:5ee9:9354:3dba",
                        taken_timestamp: 1533148980,
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      ])
    );
  });
});
