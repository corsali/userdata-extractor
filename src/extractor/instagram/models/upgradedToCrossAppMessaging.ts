import { BoolTableValue, DateTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class UpgradedToCrossAppMessaging extends InstagramBaseModel {
  upgraded?: BoolTableValue;

  timeUpgraded?: DateTableValue;

  constructor(upgraded: string, timeUpgraded: string) {
    super();
    this.upgraded = new BoolTableValue(upgraded);
    this.timeUpgraded = new DateTableValue(timeUpgraded);
  }
}
