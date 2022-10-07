import config from "../../../config/index.js";
import { CsvExtractor } from "../../csvExtractor.js";
import { Orders } from "../models/orders.js";

const extractPrice = (price: string) =>
  parseFloat(/[\d,]*\.[\d]*/.exec(price)?.[0]);

class OrdersCsv extends CsvExtractor {
  async process() {
    await this.parse();

    if (this.csvDocument) {
      const mappedRow = this.csvDocument.map(
        (order: any) =>
          new Orders({
            orderDate: order["order date"],
            orderId: order["order id"],
            title: order.title,
            category: order.category,
            asinIsbn: order["asin/isbn"],
            unspscCode: order["unspsc code"],
            website: order.website,
            releaseDate: order["release date"],
            condition: order.condition,
            seller: order.seller,
            sellerCredentials: order["seller credentials"],
            listPricePerUnit: extractPrice(order["list price per unit"]),
            purchasePricePerUnit: extractPrice(
              order["purchase price per unit"]
            ),
            quantity: order.quantity,
            paymentInstrumentType: order["payment instrument type"],
            purchaseOrderNumber: order["purchase order number"],
            poLineNumber: order["po line number"],
            orderingCustomerEmail: order["ordering customer email"],
            shipmentDate: order["shipment date"],
            shippingAddressName: order["shipping address name"],
            shippingAddressStreet1: order["shipping address street 1"],
            shippingAddressStreet2: order["shipping address street 2"],
            shippingAddressCity: order["shipping address city"],
            shippingAddressState: order["shipping address state"],
            shippingAddressZip: order["shipping address zip"],
            orderStatus: order["order status"],
            carrierNameAndTrackingNumber:
              order["carrier name & tracking number"],
            itemSubtotal: extractPrice(order["item subtotal"]),
            itemSubtotalTax: extractPrice(order["item subtotal tax"]),
            itemTotal: extractPrice(order["item total"]),
            taxExemptionApplied: order["tax exemption applied"],
            taxExemptionType: order["tax exemption type"],
            exemptionOptOut: order["exemption opt-out"],
            buyerName: order["buyer name"],
            currency: order.currency,
            groupName: order["group name"],
          })
      );

      this.table.rows.push(...mappedRow);
    }
  }
}

export const ordersCsv = new OrdersCsv(
  config.SERVICE_AMAZON_ORDERS,
  ".*\\.csv",
  "orders"
);
