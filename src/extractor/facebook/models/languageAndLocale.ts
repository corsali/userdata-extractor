import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class LanguageAndLocale extends FacebookBaseModel {
  preference_name?: TextTableValue;

  preference_description?: TextTableValue;

  preferred_locale?: TextTableValue;

  constructor(
    preferenceName: string,
    preferenceDescription: string,
    preferredLocale: string
  ) {
    super();
    this.preference_name = new TextTableValue(preferenceName);
    this.preference_description = new TextTableValue(preferenceDescription);
    this.preferred_locale = new TextTableValue(preferredLocale);
  }
}
