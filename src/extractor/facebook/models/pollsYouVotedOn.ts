import {
  BoolTableValue,
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class PollsYouVotedOn extends FacebookBaseModel {
  poll_title?: TextTableValue;

  date_voted?: DateTableValue;

  poll_option?: TextTableValue;

  poll_voted?: BoolTableValue;

  attachments?: JsonTableValue;

  constructor(values: {
    pollTitle: string;
    dateVoted: number;
    pollOption: string;
    pollVoted: boolean;
    attachments: object;
  }) {
    super();
    this.poll_title = new TextTableValue(values.pollTitle);
    this.date_voted = new DateTableValue(values.dateVoted);
    this.poll_option = new TextTableValue(values.pollOption);
    this.poll_voted = new BoolTableValue(values.pollVoted);
    this.attachments = new JsonTableValue(values.attachments);
  }
}
