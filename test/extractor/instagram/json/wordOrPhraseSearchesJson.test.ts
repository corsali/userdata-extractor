/* eslint-disable no-restricted-syntax */
import { wordOrPhraseSearchesJson } from "../../../../src/extractor/instagram/json/wordOrPhraseSearchesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Content Interactions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/recent_searches/word_or_phrase_searches.json"
    );

    wordOrPhraseSearchesJson.setJsonDocument(data);
    wordOrPhraseSearchesJson.process();

    const { rows } = wordOrPhraseSearchesJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.search).toEqual(new TextTableValue("weaplthsimple"));
    expect(row.date_searched).toEqual(new DateTableValue(1648587658));
  });
});
