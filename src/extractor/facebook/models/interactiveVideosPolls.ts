import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class InteractiveVideosPolls extends FacebookBaseModel {
  date_took_poll?: DateTableValue;

  activity_title?: TextTableValue;

  poll_title?: TextTableValue;

  poll_response?: TextTableValue;

  constructor(
    dateTookPoll: number,
    activityTitle: string,
    pollTitle: string,
    pollResponse: string
  ) {
    super();
    this.date_took_poll = new DateTableValue(dateTookPoll);
    this.activity_title = new TextTableValue(activityTitle);
    this.poll_title = new TextTableValue(pollTitle);
    this.poll_response = new TextTableValue(pollResponse);
  }
}
