import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class VotingLocation extends FacebookBaseModel {
  voting_location?: TextTableValue;

  constructor(votingLocation: string) {
    super();
    this.voting_location = new TextTableValue(votingLocation);
  }
}
