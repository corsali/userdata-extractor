import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class Monetization extends InstagramBaseModel {
  product_name?: TextTableValue;

  decision?: TextTableValue;

  reason?: TextTableValue;

  constructor(values: {
    productName: string;
    decision: string;
    reason: string;
  }) {
    super();
    this.product_name = new TextTableValue(values.productName);
    this.decision = new TextTableValue(values.decision);
    this.reason = new TextTableValue(values.reason);
  }
}
