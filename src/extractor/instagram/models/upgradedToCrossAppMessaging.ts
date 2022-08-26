import { DateTableValue, BoolTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class UpgradedToCrossAppMessaging extends InstagramBaseModel {
  upgraded?: BoolTableValue;

  timeUpgraded?: DateTableValue;

  constructor(values: { [key: string]: string }) {
    super();
    this.upgraded = new BoolTableValue(values.upgraded);
    this.timeUpgraded = new DateTableValue(values.timeUpgraded);
  }
}
