import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class SuggestedAccountsViewed extends InstagramBaseModel {
  account_suggested?: TextTableValue;

  date_suggested?: DateTableValue;

  constructor(accountSuggested: string, dateSuggested: string) {
    super();
    this.account_suggested = new TextTableValue(accountSuggested);
    this.date_suggested = new DateTableValue(dateSuggested);
  }
}
