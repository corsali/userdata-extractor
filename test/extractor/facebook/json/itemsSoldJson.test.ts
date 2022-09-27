import { itemsSoldJson } from "../../../../src/extractor/facebook/json/itemsSoldJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Items Sold (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_marketplace/items_sold.json"
    );

    itemsSoldJson.setJsonDocument(data);
    itemsSoldJson.process();

    const { rows } = itemsSoldJson.table;

    expect(rows.length).toEqual(3);
    expect(rows[0].item_title).toEqual(new TextTableValue("Wedding Dress"));
    expect(rows[0].price).toEqual(new TextTableValue("$750"));
    expect(rows[0].seller_name).toEqual(new TextTableValue("Shelby Garrity"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1546023243));
    expect(rows[0].date_updated).toEqual(new DateTableValue(1546024775));
    expect(rows[0].category).toEqual(
      new TextTableValue("Women's clothing & shoes")
    );
    expect(rows[0].marketplace).toEqual(
      new TextTableValue("CT Wedding Tag Sale")
    );
    expect(rows[0].location_latitude).toEqual(new FloatTableValue(42.13748));
    expect(rows[0].location_longitude).toEqual(new FloatTableValue(-80.01419));
    expect(rows[0].description).toEqual(
      new TextTableValue(
        "Looking to sell my wedding dress that was only worn for around 4 hours during my reception. It's absolutely beautiful and I want to give someone else the chance to love it as much as I did! Retails for $1950, the style is 2042 from Essense of Australia in the color Ivory with Stone tulle. Tag size is 12 but it has been tailored to fit 34C bust, 27 waist, and 40 hip. It is more open toward the hip so the bust and waist measurements are the most important. A gorgeous bustle has been added for the long train. All my family is from CT so I can ship or arrange a pickup. I will include the veil shown in the photos at no extra charge if you like it!"
      )
    );
  });
});
