import { yourPagesAndProfilesJson } from "../../../../src/extractor/facebook/json/yourPagesAndProfilesJson";
import { TextTableValue, UrlTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Pages And Profiles (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/pages_and_profiles/your_pages_and_profiles.json"
    );

    yourPagesAndProfilesJson.setJsonDocument(data);
    yourPagesAndProfilesJson.process();

    const { rows } = yourPagesAndProfilesJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].page_name).toEqual(new TextTableValue("My Page"));
    expect(rows[0].page_url).toEqual(
      new UrlTableValue("https://www.facebook.com/My-Page-86342525657/")
    );
  });
});
