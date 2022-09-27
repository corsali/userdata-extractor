import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { GamingProfile } from "../models/gamingProfile.js";

class GamingProfileJson extends JsonExtractor {
  async process() {
    const gamingProfile = this.query(`$.facebook_gaming_profile_v2`)[0];

    this.table.rows.push(
      new GamingProfile(
        gamingProfile?.player_name,
        gamingProfile?.avatar?.uri,
        gamingProfile?.avatar?.creation_timestamp
      )
    );
  }
}

export const gamingProfileJson = new GamingProfileJson(
  config.SERVICE_FACEBOOK,
  ".*/gaming_profile.json",
  "gaming_profile"
);
