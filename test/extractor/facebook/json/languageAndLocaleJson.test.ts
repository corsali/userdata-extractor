import { languageAndLocaleJson } from "../../../../src/extractor/facebook/json/languageAndLocaleJson";
import {
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Language And Locale (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/preferences/language_and_locale.json"
    );

    languageAndLocaleJson.setJsonDocument(data);
    languageAndLocaleJson.process();

    const { rows } = languageAndLocaleJson.table;

    const expectedValues = [
      ["Language Settings", "Your preferred language settings", "en_US"],
      [
        "Preferred Language for Videos",
        "The preferred language for videos as determined by videos you've previously viewed",
        "en",
      ],
      [
        "Languages You May Know",
        "Languages you may know as determined by your activity on Facebook",
        "en",
      ],
      [
        "Languages You May Know",
        "Languages you may know as determined by your activity on Facebook",
        "sk",
      ],
      [
        "Preferred Language",
        "Your preferred languages as determined by your activity on Facebook",
        "sk_SK",
      ],
    ];

    expect(rows.length).toEqual(expectedValues.length);

    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].preference_name).toEqual(
        new TextTableValue(expectedValue[0])
      );
      expect(rows[index].preference_description).toEqual(
        new TextTableValue(expectedValue[1])
      );
      expect(rows[index].preferred_locale).toEqual(
        new TextTableValue(expectedValue[2])
      );
    });
  });
});
