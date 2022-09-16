import { IntegerTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class MarketplaceNotifications extends FacebookBaseModel {
  sent_last_28_days?: IntegerTableValue;

  opened_last_28_days?: IntegerTableValue;

  dismissed_last_28_days?: IntegerTableValue;

  constructor(
    sentLast28Days: number,
    openedLast28Days: number,
    dismissedLast28Days: number
  ) {
    super();
    this.sent_last_28_days = new IntegerTableValue(sentLast28Days);
    this.opened_last_28_days = new IntegerTableValue(openedLast28Days);
    this.dismissed_last_28_days = new IntegerTableValue(dismissedLast28Days);
  }
}
