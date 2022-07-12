import { DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class SuggestedAccountsViewed extends InstagramBaseModel {
  account_suggested?: TextItem;

  date_suggested?: DateItem;

  constructor(accountSuggested: string, dateSuggested: string) {
    super();
    this.account_suggested = new TextItem(accountSuggested);
    this.date_suggested = new DateItem(dateSuggested);
  }
}
