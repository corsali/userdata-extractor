import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PollsYouVotedOn } from "../models/pollsYouVotedOn.js";

class PollsYouVotedOnJson extends JsonExtractor {
  async process() {
    const pollsYouVotedOn = this.query(`$.poll_votes_v2.*`);

    const processedPollVotes = pollsYouVotedOn.map(
      (pollVote) =>
        new PollsYouVotedOn({
          pollTitle: pollVote.title,
          dateVoted: pollVote.timestamp,
          pollOption:
            pollVote.attachments?.[0]?.data?.[0]?.poll?.options?.[0]?.option,
          pollVoted:
            pollVote.attachments?.[0]?.data?.[0]?.poll?.options?.[0]?.voted,
          attachments: pollVote.attachments,
        })
    );

    this.table.rows.push(...processedPollVotes);
  }
}

export const pollsYouVotedOnJson = new PollsYouVotedOnJson(
  config.SERVICE_FACEBOOK,
  ".*/polls_you_voted_on.json",
  "polls_you_voted_on"
);
