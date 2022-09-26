import { yourLocalListsJson } from "../../../../src/extractor/facebook/json/yourLocalListsJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Local Lists (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/saved_items_and_collections/your_local_lists.json"
    );

    yourLocalListsJson.setJsonDocument(data);
    yourLocalListsJson.process();

    const { rows } = yourLocalListsJson.table;

    expect(rows.length).toEqual(5);
    expect(rows[0].list_title).toEqual(new TextTableValue("Places I've been"));
    expect(rows[0].date_created).toEqual(new DateTableValue(1535020263));
    expect(rows[0].description).toEqual(new TextTableValue(""));
    expect(rows[0].place_name).toEqual(
      new TextTableValue("CHC Addiction Services")
    );
    expect(rows[0].place_latitude).toEqual(
      new FloatTableValue(41.076001336587)
    );
    expect(rows[0].place_longitude).toEqual(
      new FloatTableValue(-81.494597955298)
    );
    expect(rows[0].place_address).toEqual(
      new TextTableValue("725 E Market St, Akron, OH 44305")
    );
  });
});
