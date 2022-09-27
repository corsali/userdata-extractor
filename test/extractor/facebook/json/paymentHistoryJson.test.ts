import { paymentHistoryJson } from "../../../../src/extractor/facebook/json/paymentHistoryJson";
import {
  DateTableValue,
  FloatTableValue,
  IntegerTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Payment History (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_payments/payment_history.json"
    );

    paymentHistoryJson.setJsonDocument(data);
    paymentHistoryJson.process();

    const { rows } = paymentHistoryJson.table;

    const expectedValues = [
      {
        index: 0,
        created_timestamp: 1602018456,
        amount: "10.00",
        currency: "USD",
        sender: "Joe Walther",
        receiver: "Shawn Hagene",
        type: "Payment",
        status: "Completed",
        payment_data: {
          p2p_payment: {
            memo: "CITS RESEARCH COMPENSATION",
            total_amount: "$10.00",
          },
        },
      },
      {
        index: 7,
        created_timestamp: 1380025050,
        amount: "1.00",
        currency: "USD",
        sender: "",
        receiver: "Facebook Messages",
        type: "Payment",
        status: "Completed",
        payment_method: "Mastercard ending in 2128",
        ip: "71.86.43.154",
      },
    ];

    expect(rows.length).toEqual(8);
    expectedValues.forEach((expectedValue) => {
      expect(rows[expectedValue.index].payment_date).toEqual(
        new DateTableValue(expectedValue.created_timestamp)
      );
      expect(rows[expectedValue.index].amount).toEqual(
        new FloatTableValue(expectedValue.amount)
      );
      expect(rows[expectedValue.index].currency).toEqual(
        new TextTableValue(expectedValue.currency)
      );
      expect(rows[expectedValue.index].sender_name).toEqual(
        new TextTableValue(expectedValue.sender)
      );
      expect(rows[expectedValue.index].receiver_name).toEqual(
        new TextTableValue(expectedValue.receiver)
      );
      expect(rows[expectedValue.index].type).toEqual(
        new TextTableValue(expectedValue.type)
      );
      expect(rows[expectedValue.index].payment_status).toEqual(
        new TextTableValue(expectedValue.status)
      );
      expect(rows[expectedValue.index].payment_memo).toEqual(
        new TextTableValue(expectedValue.payment_data?.p2p_payment?.memo ?? "")
      );
      expect(rows[expectedValue.index].payment_method).toEqual(
        new TextTableValue(expectedValue.payment_method ?? "")
      );
      expect(rows[expectedValue.index].ip_address).toEqual(
        new TextTableValue(expectedValue.ip ?? "")
      );
    });
  });
});
