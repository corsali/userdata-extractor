import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class RecentlyViewedShoppingItems extends InstagramBaseModel {
  product_id?: TextTableValue;

  product_name?: TextTableValue;

  merchant_id?: TextTableValue;

  merchant_name?: TextTableValue;

  constructor(values: {
    productId: string;
    productName: string;
    merchantId: string;
    merchantName: string;
  }) {
    super();
    this.product_id = new TextTableValue(values.productId);
    this.product_name = new TextTableValue(values.productName);
    this.merchant_id = new TextTableValue(values.merchantId);
    this.merchant_name = new TextTableValue(values.merchantName);
  }
}
