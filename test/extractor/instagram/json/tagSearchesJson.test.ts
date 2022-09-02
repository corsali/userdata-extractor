import { tagSearchesJson } from "../../../../src/extractor/instagram/json/tagSearchesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Tag Searches (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/recent_searches/tag_searches.json"
    );

    tagSearchesJson.setJsonDocument(data);
    tagSearchesJson.process();

    const { rows } = tagSearchesJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].search_tag).toEqual(new TextTableValue("outsidelands"));
    expect(rows[0].date_searched).toEqual(new DateTableValue(1660258611));
    expect(rows[1].search_tag).toEqual(new TextTableValue("osl"));
    expect(rows[1].date_searched).toEqual(new DateTableValue(1659853493));
  });
});
