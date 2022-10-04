import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { VotingReminders } from "../models/votingReminders.js";

class VotingRemindersJson extends JsonExtractor {
  async process() {
    const votingReminders = this.query(
      `$.voting_reminders_v2.voting_reminders`
    )[0];

    this.table.rows.push(new VotingReminders(votingReminders));
  }
}

export const votingRemindersJson = new VotingRemindersJson(
  config.SERVICE_FACEBOOK,
  ".*/voting_reminders.json",
  "voting_reminders"
);
