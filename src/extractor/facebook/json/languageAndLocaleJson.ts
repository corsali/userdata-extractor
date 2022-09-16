import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { LanguageAndLocale } from "../models/languageAndLocale.js";

class LanguageAndLocaleJson extends JsonExtractor {
  async process() {
    const localePreferences = this.query(`$.language_and_locale_v2.*`);

    localePreferences.forEach((localePreference) => {
      const localeEntries =
        localePreference.children?.[0]?.entries ?? localePreference.entries;

      localeEntries?.forEach((localeEntry?: { data?: { value?: string } }) => {
        this.table.rows.push(
          new LanguageAndLocale(
            localePreference.name,
            localePreference.description,
            localeEntry?.data?.value
          )
        );
      });
    });
  }
}

export const languageAndLocaleJson = new LanguageAndLocaleJson(
  config.SERVICE_FACEBOOK,
  ".*/language_and_locale.json",
  "language_and_locale"
);
