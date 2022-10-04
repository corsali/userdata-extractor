import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class VotingReminders extends FacebookBaseModel {
  voting_reminders?: TextTableValue;

  constructor(votingReminders: string) {
    super();
    this.voting_reminders = new TextTableValue(votingReminders);
  }
}
