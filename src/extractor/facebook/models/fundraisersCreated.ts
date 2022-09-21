import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class FundraisersCreated extends FacebookBaseModel {
  fundraiser_title?: TextTableValue;

  date_started?: DateTableValue;

  date_ended?: DateTableValue;

  date_created?: DateTableValue;

  goal_amount?: TextTableValue;

  raised_amount?: TextTableValue;

  donated_amount?: TextTableValue;

  action_title?: TextTableValue;

  constructor(values: {
    fundraiserTitle: string;
    dateStarted: number;
    dateEnded: number;
    dateCreated: number;
    goalAmount: string;
    raisedAmount: string;
    donatedAmount: string;
    actionTitle: string;
  }) {
    super();
    this.fundraiser_title = new TextTableValue(values.fundraiserTitle);
    this.date_started = new DateTableValue(values.dateStarted);
    this.date_ended = new DateTableValue(values.dateEnded);
    this.date_created = new DateTableValue(values.dateCreated);
    this.goal_amount = new TextTableValue(values.goalAmount);
    this.raised_amount = new TextTableValue(values.raisedAmount);
    this.donated_amount = new TextTableValue(values.donatedAmount);
    this.action_title = new TextTableValue(values.actionTitle);
  }
}
