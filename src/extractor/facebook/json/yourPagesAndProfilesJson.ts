import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourPagesAndProfiles } from "../models/yourPagesAndProfiles.js";

class YourPagesAndProfilesJson extends JsonExtractor {
  async process() {
    const yourPagesAndProfiles = this.query(`$.pages_v2.*`);

    const processedPagesAndProfiles = yourPagesAndProfiles.map(
      // @todo The json object contains also .timestamp attribute; I am not
      // sure what it represents, but it's not creation date.
      (page) => new YourPagesAndProfiles(page.name, page.url)
    );

    this.table.rows.push(...processedPagesAndProfiles);
  }
}

export const yourPagesAndProfilesJson = new YourPagesAndProfilesJson(
  config.SERVICE_FACEBOOK,
  ".*/your_pages_and_profiles.json",
  "your_pages_and_profiles"
);
