import {
  BoolTableValue,
  DateTableValue,
  EmailTableValue,
  FloatTableValue,
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { AmazonBaseModel } from "./amazonBaseModel.js";

export class Orders extends AmazonBaseModel {
  order_date?: DateTableValue;

  order_id?: TextTableValue;

  title?: TextTableValue;

  category?: TextTableValue;

  asin_isbn?: TextTableValue;

  unspsc_code?: TextTableValue;

  website?: UrlTableValue;

  release_date?: DateTableValue;

  condition?: TextTableValue;

  seller?: TextTableValue;

  seller_credentials?: TextTableValue;

  list_price_per_unit?: FloatTableValue;

  purchase_price_per_unit?: FloatTableValue;

  quantity?: IntegerTableValue;

  payment_instrument_type?: TextTableValue;

  purchase_order_number?: TextTableValue;

  po_line_number?: TextTableValue;

  ordering_customer_email?: EmailTableValue;

  shipment_date?: DateTableValue;

  shipping_address_name?: TextTableValue;

  shipping_address_street_1?: TextTableValue;

  shipping_address_street_2?: TextTableValue;

  shipping_address_city?: TextTableValue;

  shipping_address_state?: TextTableValue;

  shipping_address_zip?: TextTableValue;

  order_status?: TextTableValue;

  carrier_name_and_tracking_number?: TextTableValue;

  item_subtotal?: FloatTableValue;

  item_subtotal_tax?: FloatTableValue;

  item_total?: FloatTableValue;

  tax_exemption_applied?: BoolTableValue;

  tax_exemption_type?: TextTableValue;

  exemption_opt_out?: BoolTableValue;

  buyer_name?: TextTableValue;

  currency?: TextTableValue;

  group_name?: TextTableValue;

  constructor(values: {
    orderDate?: number | string;
    orderId?: string;
    title?: string;
    category?: string;
    asinIsbn?: string;
    unspscCode?: string;
    website?: string;
    releaseDate?: number | string;
    condition?: string;
    seller?: string;
    sellerCredentials?: string;
    listPricePerUnit?: number;
    purchasePricePerUnit?: number;
    quantity?: number;
    paymentInstrumentType?: string;
    purchaseOrderNumber?: string;
    poLineNumber?: string;
    orderingCustomerEmail?: string;
    shipmentDate?: number | string;
    shippingAddressName?: string;
    shippingAddressStreet1?: string;
    shippingAddressStreet2?: string;
    shippingAddressCity?: string;
    shippingAddressState?: string;
    shippingAddressZip?: string;
    orderStatus?: string;
    carrierNameAndTrackingNumber?: string;
    itemSubtotal?: number;
    itemSubtotalTax?: number;
    itemTotal?: number;
    taxExemptionApplied?: boolean;
    taxExemptionType?: string;
    exemptionOptOut?: boolean;
    buyerName?: string;
    currency?: string;
    groupName?: string;
  }) {
    super();
    this.order_date = new DateTableValue(values.orderDate);
    this.order_id = new TextTableValue(values.orderId);
    this.title = new TextTableValue(values.title);
    this.category = new TextTableValue(values.category);
    this.asin_isbn = new TextTableValue(values.asinIsbn);
    this.unspsc_code = new TextTableValue(values.unspscCode);
    this.website = new UrlTableValue(values.website);
    this.release_date = new DateTableValue(values.releaseDate);
    this.condition = new TextTableValue(values.condition);
    this.seller = new TextTableValue(values.seller);
    this.seller_credentials = new TextTableValue(values.sellerCredentials);
    this.list_price_per_unit = new FloatTableValue(values.listPricePerUnit);
    this.purchase_price_per_unit = new FloatTableValue(
      values.purchasePricePerUnit
    );
    this.quantity = new IntegerTableValue(values.quantity);
    this.payment_instrument_type = new TextTableValue(
      values.paymentInstrumentType
    );
    this.purchase_order_number = new TextTableValue(values.purchaseOrderNumber);
    this.po_line_number = new TextTableValue(values.poLineNumber);
    this.ordering_customer_email = new EmailTableValue(
      values.orderingCustomerEmail
    );
    this.shipment_date = new DateTableValue(values.shipmentDate);
    this.shipping_address_name = new TextTableValue(values.shippingAddressName);
    this.shipping_address_street_1 = new TextTableValue(
      values.shippingAddressStreet1
    );
    this.shipping_address_street_2 = new TextTableValue(
      values.shippingAddressStreet2
    );
    this.shipping_address_city = new TextTableValue(values.shippingAddressCity);
    this.shipping_address_state = new TextTableValue(
      values.shippingAddressState
    );
    this.shipping_address_zip = new TextTableValue(values.shippingAddressZip);
    this.order_status = new TextTableValue(values.orderStatus);
    this.carrier_name_and_tracking_number = new TextTableValue(
      values.carrierNameAndTrackingNumber
    );
    this.item_subtotal = new FloatTableValue(values.itemSubtotal);
    this.item_subtotal_tax = new FloatTableValue(values.itemSubtotalTax);
    this.item_total = new FloatTableValue(values.itemTotal);
    this.tax_exemption_applied = new BoolTableValue(values.taxExemptionApplied);
    this.tax_exemption_type = new TextTableValue(values.taxExemptionType);
    this.exemption_opt_out = new BoolTableValue(values.exemptionOptOut);
    this.buyer_name = new TextTableValue(values.buyerName);
    this.currency = new TextTableValue(values.currency);
    this.group_name = new TextTableValue(values.groupName);
  }
}
