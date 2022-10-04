import { yourPagesJson } from "../../../../src/extractor/facebook/json/yourPagesJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Pages (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/pages/your_pages.json"
    );

    yourPagesJson.setJsonDocument(data);
    yourPagesJson.process();

    const { rows } = yourPagesJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].page_name).toEqual(
      new TextTableValue("St Peters Condominium Association")
    );
    expect(rows[0].date_created).toEqual(new DateTableValue(1605741859000));
    expect(rows[0].page_url).toEqual(
      new UrlTableValue("https://www.facebook.com/StPetersCondo/")
    );
  });
});
