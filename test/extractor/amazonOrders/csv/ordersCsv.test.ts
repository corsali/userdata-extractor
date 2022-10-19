import config from "../../../../src/config";
import { ordersCsv } from "../../../../src/extractor/amazonOrders/csv/ordersCsv";
import { FileExtractor } from "../../../../src/extractor/fileExtractor";
import {
  BoolTableValue,
  DateTableValue,
  EmailTableValue,
  FloatTableValue,
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsText } from "../../../helper";

describe("Orders (CSV)", () => {
  beforeEach(() => {
    FileExtractor.dumpExtractorData(config.SERVICE_AMAZON_ORDERS);
  });
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText(
      "/csv/amazon_orders/Amazon_Orders_csv.csv"
    );

    ordersCsv.fileContents = data;

    await ordersCsv.process();
    const { rows } = ordersCsv.table;

    expect(rows.length).toBe(2);

    expect(rows[0].asin_isbn).toEqual(new TextTableValue("B09JR24YYW"));
    expect(rows[0].buyer_name).toEqual(new TextTableValue("Z Hay"));
    expect(rows[0].carrier_name_and_tracking_number).toEqual(
      new TextTableValue("AMZN_US(TBA154327887604)")
    );
    expect(rows[0].category).toEqual(new TextTableValue("CHARGING_ADAPTER"));
    expect(rows[0].condition).toEqual(new TextTableValue("new"));
    expect(rows[0].currency).toEqual(new TextTableValue("USD"));
    expect(rows[0].exemption_opt_out).toEqual(new BoolTableValue(false));
    expect(rows[0].group_name).toEqual(new TextTableValue(""));
    expect(rows[0].item_subtotal).toEqual(new FloatTableValue(59));
    expect(rows[0].item_subtotal_tax).toEqual(new FloatTableValue(5.22));
    expect(rows[0].item_total).toEqual(new FloatTableValue(64.22));
    expect(rows[0].list_price_per_unit).toEqual(new FloatTableValue(59));
    expect(rows[0].order_date).toEqual(new DateTableValue("01/11/22"));
    expect(rows[0].order_id).toEqual(new TextTableValue("113-9614127-1313059"));
    expect(rows[0].order_status).toEqual(new TextTableValue("Shipped"));
    expect(rows[0].ordering_customer_email).toEqual(
      new EmailTableValue("zach@gmail.com")
    );
    expect(rows[0].payment_instrument_type).toEqual(
      new TextTableValue("Visa - 5843")
    );
    expect(rows[0].po_line_number).toEqual(new TextTableValue(""));
    expect(rows[0].purchase_order_number).toEqual(new TextTableValue(""));
    expect(rows[0].purchase_price_per_unit).toEqual(new FloatTableValue(59));
    expect(rows[0].quantity).toEqual(new IntegerTableValue(1));
    expect(rows[0].release_date).toEqual(new DateTableValue(""));
    expect(rows[0].seller).toEqual(new TextTableValue("Amazon.com"));
    expect(rows[0].seller_credentials).toEqual(new TextTableValue(""));
    expect(rows[0].shipment_date).toEqual(new DateTableValue("01/13/22"));
    expect(rows[0].shipping_address_city).toEqual(
      new TextTableValue("BLOOMINGTON")
    );
    expect(rows[0].shipping_address_name).toEqual(new TextTableValue("Z Hay"));
    expect(rows[0].shipping_address_state).toEqual(new TextTableValue("CO"));
    expect(rows[0].shipping_address_street_1).toEqual(
      new TextTableValue("123 Street APT B")
    );
    expect(rows[0].shipping_address_street_2).toEqual(new TextTableValue(""));
    expect(rows[0].shipping_address_zip).toEqual(
      new TextTableValue("80305-6267")
    );
    expect(rows[0].tax_exemption_applied).toEqual(new BoolTableValue(false));
    expect(rows[0].tax_exemption_type).toEqual(new TextTableValue(""));
    expect(rows[0].title).toEqual(
      new TextTableValue("Apple 67W USB-C Power Adapter")
    );
    expect(rows[0].unspsc_code).toEqual(new TextTableValue("26111704"));
    expect(rows[0].website).toEqual(new UrlTableValue("Amazon.com"));
  });

  test("it should load a file with no orders", async () => {
    const data = await loadTestFileAsText(
      "/csv/amazon_orders/01-Jan-2010_to_08-Oct-2010.csv"
    );

    ordersCsv.fileContents = data;

    await ordersCsv.process();
    const { rows } = ordersCsv.table;

    expect(rows.length).toBe(0);
  });
});
