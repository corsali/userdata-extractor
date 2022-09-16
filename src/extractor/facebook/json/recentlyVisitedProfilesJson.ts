import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentlyVisitedProfiles } from "../models/recentlyVisitedProfiles.js";

class RecentlyVisitedProfilesJson extends JsonExtractor {
  async process() {
    const visitedProfiles = this.query(
      `$.visited_things_v2[?(@.name=='Profile visits')].entries.*`
    );

    const processedVisitedProfiles = visitedProfiles.map(
      (visitedProfile) =>
        new RecentlyVisitedProfiles(
          visitedProfile.data?.name,
          visitedProfile.data?.uri,
          visitedProfile.timestamp
        )
    );

    this.table.rows.push(...processedVisitedProfiles);
  }
}

export const recentlyVisitedProfilesJson = new RecentlyVisitedProfilesJson(
  config.SERVICE_FACEBOOK,
  ".*/recently_visited.json",
  "recently_visited_profiles"
);
