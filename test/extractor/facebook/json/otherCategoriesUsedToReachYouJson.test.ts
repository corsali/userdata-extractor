import { otherCategoriesUsedToReachYouJson as otherCategoriesJson } from "../../../../src/extractor/facebook/json/otherCategoriesUsedToReachYouJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Other Categories Used To Reach You (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/ads_information/other_categories_used_to_reach_you.json"
    );

    otherCategoriesJson.setJsonDocument(data);
    otherCategoriesJson.process();

    const { rows } = otherCategoriesJson.table;

    expect(rows.length).toEqual(26);

    expect(rows[5].category_name).toEqual(
      new TextTableValue("Facebook access (browser): Chrome")
    );
    expect(rows[17].category_name).toEqual(
      new TextTableValue("Friends of Soccer fans")
    );
  });
});
