/* eslint-disable no-restricted-syntax */
import { removedSuggestionsJson } from "../../../../src/extractor/instagram/json/removedSuggestionsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Removed Suggestions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/followers_and_following/removed_suggestions.json"
    );

    removedSuggestionsJson.setJsonDocument(data);
    removedSuggestionsJson.process();

    const { rows } = removedSuggestionsJson.table;

    expect(rows.length).toEqual(34);

    expect(rows[0].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/fraserbraden")
    );
    expect(rows[0].name).toEqual(new TextTableValue("fraserbraden"));
    expect(rows[0].date_removed).toEqual(new DateTableValue(1538565746));
    expect(rows[33].profile_url).toEqual(
      new UrlTableValue("https://www.instagram.com/r0w67")
    );
    expect(rows[33].name).toEqual(new TextTableValue("r0w67"));
    expect(rows[33].date_removed).toEqual(new DateTableValue(1484823652));
  });
});
