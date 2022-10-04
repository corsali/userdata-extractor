import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { VotingLocation } from "../models/votingLocation.js";

class VotingLocationJson extends JsonExtractor {
  async process() {
    const votingLocation = this.query(
      `$.voting_location_v2.voting_location`
    )[0];

    this.table.rows.push(new VotingLocation(votingLocation));
  }
}

export const votingLocationJson = new VotingLocationJson(
  config.SERVICE_FACEBOOK,
  ".*voting.*/location.json",
  "voting_location"
);
