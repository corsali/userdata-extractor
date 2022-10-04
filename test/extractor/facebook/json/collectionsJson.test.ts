import { collectionsJson } from "../../../../src/extractor/facebook/json/collectionsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Collections (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/saved_items_and_collections/collections.json"
    );

    collectionsJson.setJsonDocument(data);
    collectionsJson.process();

    const { rows } = collectionsJson.table;

    expect(rows.length).toEqual(19);
    expect(rows[0].activity_title).toEqual(
      new TextTableValue(
        "Georgianne Cleone Gotko created a new collection: Household."
      )
    );
    expect(rows[0].collection_name).toEqual(new TextTableValue("Household"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1530683517));
    expect(rows[18].activity_title).toEqual(
      new TextTableValue(
        "Georgianne Cleone Gotko created a new collection: Elipses."
      )
    );
    expect(rows[18].collection_name).toEqual(new TextTableValue("Elipses"));
    expect(rows[18].date_created).toEqual(new DateTableValue(1640220404));
  });
});
